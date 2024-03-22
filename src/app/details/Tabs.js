"use client";
import { useState, useEffect, useRef } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import "./details.css";
import tabContentImg from "../../../public/Assets/Images/Rectangle_215.png";
import speakersImg from "../../../public/Assets/Images/Rectangle_216.png";
import sponsorsImg from "../../../public/Assets/Images/Rectangle_217.png";
import Image from "next/image";
import { gql } from "@apollo/client";
import createApolloClient from "/apollo-client";
import { useParams } from "next/navigation";

// const Item = ({ id, text, moveItem }) => {
//   const [{ isDragging }, dragRef] = useDrag({
//     type: "ITEM",
//     item: { id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       ref={dragRef}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "move",
//       }}
//     >
//       {text}
//     </div>
//   );
// };

const Tabs = () => {
  const { id } = useParams();


  const urlSegment = id;
  const decodedUrl = decodeURIComponent(urlSegment);
  const [conferenceID, conferenceDate] = decodedUrl.split('&');

  console.log(conferenceID, "con"); // Output: freezing-edge-2020
  console.log(conferenceDate, "date"); // Output: 

  const [tabItems, setTabItems] = useState([
    { id: "organizer-tab-button", htmlFor: "organizer-tab", name: "Organizer" },
    { id: "speakers-tab-button", htmlFor: "speakers-tab", name: "Speakers" },
    { id: "schedule-tab-button", htmlFor: "schedule-tab", name: "Schedule" },
    { id: "sponsors-tab-button", htmlFor: "sponsors-tab", name: "Sponsors" },
  ]);
  const dragItem = useRef(0);
  const dragOverItem = useRef(0);
  function handleSort() {
    const iTemClone = [...tabItems];
    const temp = iTemClone[dragItem.current];
    iTemClone[dragItem.current] = iTemClone[dragOverItem.current];
    iTemClone[dragOverItem.current] = temp;
    setTabItems(iTemClone);
  }

  const [conference, setConference] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {

    const fetchDetails = async () => {
      try {
        const client = createApolloClient();
        const { data } = await client.query({
          query: gql`
            query {
              conference(id: "${conferenceID}") {
                id
                name
                slogan
                startDate
                organizers {
                  name
                  aboutShort
                  company
                  tagline
                  image {
                    url
                  }
                }
              }
              people {
                name
                about
                image {
                  url
                }
              }
              schedule(conferenceId: "${conferenceID}", day: "${conferenceDate}") {
                day

                location {
                  name
                  about
                  address

                  country {
                    name
                    code
                  }
                }
                intervals {
                  begin
                  end
                  sessions {
                    title
                    type
                  }
                }
                description
              }
              sponsors {
                name
                about
                image {
                  url
                }
              }
            }
          `,
        });
        console.log("data", data);
        console.log("organizers", data.conference.startDate);
        console.log("speaker", data.people);
        setConference([data.conference]);
        setOrganizers(data.conference.organizers);
        setSpeakers(data.people);
        setSchedules([data.schedule]);
        setSponsors(data.sponsors);
      } catch (error) {
        console.error("Error fetching conference data:", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <section className="container mx-auto py-28 px-5 z-10">
        {conference.map((conf, index) => (
          <div key={index}>
            <h1 className="head-1 mb-4">{conf.name}</h1>
            <p className="head-3 text-ctDeepGray">{conf.slogan}</p>
          </div>
        ))}

        <div
          role="tablist"
          className="tabs grid md:grid-cols-[1fr,2.5fr] gap-14 items-start mt-20"
        >
          <div className="tab-buttons hidden md:flex flex-col gap-4 ">
            {/* <Item id="organizer" text="Organizer" moveItem={() => {}}> */}
            {tabItems.map((tabItem, index) => (
              <label
                key={index} // Added key prop
                id={tabItem.id}
                className="tab-button"
                htmlFor={tabItem.htmlFor}
                draggable
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className=" flex p-2 items-center gap-14 pointer-events-none border border-slate-100 rounded-md font-medium">
                  <div className="bg-ctGhostWhite p-3 rounded">
                    <svg
                      width="29"
                      height="26"
                      viewBox="0 0 29 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 24L17 19.1111M7 2V24V2ZM7 2L12 6.88889L7 2ZM7 2L2 6.88889L7 2ZM22 24V2V24ZM22 24L27 19.1111L22 24Z"
                        stroke="#FFC93E"
                        strokeWidth="3" // Changed to strokeWidth
                        strokeLinecap="round" // Changed to strokeLinecap
                        strokeLinejoin="round" // Changed to strokeLinejoin
                      />
                    </svg>
                  </div>
                  {tabItem.name}
                </div>
              </label>
            ))}
          </div>
          <div className="">
            <div className="tab-contents">
              {tabItems.map((tabItem, index) => (

                <label
                  key={index} // Added key prop
                  id={tabItem.id}
                  className="tab-button md:hidden"
                  htmlFor={tabItem.htmlFor}
                  draggable
                  onDragStart={() => (dragItem.current = index)}
                  onDragEnter={() => (dragOverItem.current = index)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <div className=" flex p-2 items-center gap-14 pointer-events-none border border-slate-100 rounded-md font-medium">
                    <div className="bg-ctGhostWhite p-3 rounded">
                      <svg
                        width="29"
                        height="26"
                        viewBox="0 0 29 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 24L17 19.1111M7 2V24V2ZM7 2L12 6.88889L7 2ZM7 2L2 6.88889L7 2ZM22 24V2V24ZM22 24L27 19.1111L22 24Z"
                          stroke="#FFC93E"
                          strokeWidth="3" // Changed to strokeWidth
                          strokeLinecap="round" // Changed to strokeLinecap
                          strokeLinejoin="round" // Changed to strokeLinejoin
                        />
                      </svg>
                    </div>
                    {tabItem.name}
                  </div>
                </label>


              ))}
            </div>
            {/* {details.map((detail, index) => (
              <div></div>
            ))} */}
            <div className="organizer-content-wrapper">
              <input
                type="radio"
                name="my_tabs_1"
                id="organizer-tab"
                role="tab"
                className="tab hidden"
                aria-label="Organizer"
                defaultChecked
              />

              <div
                role="tabpanel"
                className="tab-content p-5 md:p-10 bg-[#F9FAFB] "
              >
                {organizers.map((organizer, index) => (
                  <div
                    key={index}
                    className="bg-ctWhite rounded-md p-4 flex items-center gap-5 md:gap-10"
                  >
                    <Image
                      className="w-36 h-36 object-cover"
                      src={organizer.image.url}
                      // src={tabContentImg}
                      width={144}
                      height={144}
                      alt=""
                    />
                    <div className="">
                      <h4 className="head-3 !font-bold mb-5">
                        {organizer.name}
                      </h4>
                      <p className="body-text2">{organizer.aboutShort}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="speaker-content-wrapper">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                id="speakers-tab"
                className="tab hidden"
                aria-label="Speakers"
              />
              <div
                role="tabpanel"
                className="tab-content p-5 md:p-10 bg-[#F9FAFB] "
              >
                {speakers.slice(0, 10).map((speaker, index) => (
                  <div
                    key={index}
                    className="bg-ctWhite rounded-md p-4 flex items-center gap-5 md:gap-10"
                  >
                    <Image
                      className="w-36 h-36 object-cover"
                      src={speaker.image.url}
                      // src={speakersImg}
                      width={144}
                      height={144}
                      alt=""
                    />
                    <div className="w-full">
                      <div className="flex gap-3 items-center justify-between mb-5">
                        <h4 className="head-3 !font-bold ">{speaker.name}</h4>
                        <div className="icons flex gap-5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                              fill="#CDCDCD"
                            />
                          </svg>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_43_220)">
                              <path
                                d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z"
                                fill="#CDCDCD"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_43_220">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 0C4.47939 0 0 4.47939 0 10C0 15.5206 4.47939 20 10 20C15.5098 20 20 15.5206 20 10C20 4.47939 15.5098 0 10 0ZM16.6052 4.60954C17.7983 6.06291 18.5141 7.91756 18.5358 9.92406C18.2538 9.86987 15.4338 9.295 12.5922 9.65294C12.5271 9.51194 12.4729 9.36006 12.4078 9.20825C12.2343 8.79613 12.0391 8.37312 11.8438 7.97181C14.9891 6.692 16.4208 4.84816 16.6052 4.60954ZM10 1.47506C12.1692 1.47506 14.154 2.28851 15.6616 3.62256C15.5097 3.83948 14.2191 5.56399 11.1822 6.70281C9.78306 4.13232 8.23213 2.0282 7.9935 1.70282C8.63338 1.55097 9.30588 1.47506 10 1.47506ZM6.36662 2.27766C6.59437 2.58134 8.11281 4.69631 9.53363 7.21256C5.5423 8.2755 2.01736 8.25381 1.63774 8.25381C2.19089 5.60738 3.98047 3.40564 6.36662 2.27766ZM1.45336 10.0109C1.45336 9.92406 1.45336 9.83731 1.45336 9.75056C1.82213 9.76137 5.96529 9.81562 10.2278 8.53581C10.4773 9.013 10.705 9.50106 10.9219 9.98913C10.8134 10.0217 10.6941 10.0542 10.5857 10.0867C6.18221 11.5076 3.83948 15.3904 3.64425 15.7158C2.2885 14.2082 1.45336 12.2018 1.45336 10.0109ZM10 18.5466C8.026 18.5466 6.20391 17.8742 4.76139 16.7462C4.91323 16.4317 6.64856 13.0911 11.4642 11.41C11.4859 11.3991 11.4968 11.3991 11.5184 11.3883C12.7223 14.5011 13.2104 17.1149 13.3406 17.8633C12.3102 18.308 11.1822 18.5466 10 18.5466ZM14.7614 17.0824C14.6746 16.5618 14.2191 14.0673 13.1019 10.9978C15.7809 10.5748 18.1236 11.269 18.4165 11.3666C18.0478 13.7419 16.6811 15.7917 14.7614 17.0824Z"
                              fill="#CDCDCD"
                            />
                          </svg>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_43_225)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z"
                                fill="#CDCDCD"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_43_225">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <p className="body-text2">{speaker.about}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="schedule-content-wrapper">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                id="schedule-tab"
                className="tab hidden"
                aria-label="Schedule"
              />
              <div
                role="tabpanel"
                className="tab-content p-5 md:p-10 bg-[#F9FAFB] "
              >
                {schedules.map((schedule, index) => (
                  <div className="bg-ctWhite rounded-md p-6 "

                    key={index}>
                    <div className="w-full">
                      <div className="flex gap-3 items-center justify-between mb-5">
                        <h4 className="head-3 !font-bold ">{schedule.day}</h4>
                        <div className="icons flex gap-5">Wednesday</div>
                      </div>
                      {schedule.intervals.map((interval, index) => (
                        <p key={index} className="body-text2">
                          {interval.sessions.map((session, index) => (
                            <li key={index}
                            >{session.type}</li>
                          ))}
                          Duration:
                          {interval.begin}-{interval.end}{" "}
                        </p>
                      ))}
                      {/* <li>Design systems for beginners</li> Duration :
                      09:00-10:00
                      <li>Lunch</li> Duration : 11:30-12:00 <li>Break</li> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sponsor-content-wrapper">
              <input
                type="radio"
                name="my_tabs_1"
                id="sponsors-tab"
                role="tab"
                className="tab hidden"
                aria-label="Sponsors"
              />
              <div
                role="tabpanel"
                className="tab-content p-5 md:p-10 bg-[#F9FAFB] "
              >
                {sponsors.slice(0, 10).map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-ctWhite rounded-md p-4 flex items-center gap-5 md:gap-10"
                  >
                    <Image
                      className="w-36 h-36 object-contain"
                      src={sponsor.image.url}
                      // src={sponsorsImg}
                      width={144}
                      height={144}
                      alt=""
                    />
                    <div className="">
                      <h4 className="head-3 !font-bold mb-5">{sponsor.name}</h4>
                      <p className="body-text2">{sponsor.about}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tabs;

export async function getStaticProps(conferenceId) {
  const client = createApolloClient();
  const GET_CONFERENCE_INFO = gql`
    query GetConferenceInfo($conferenceId: ID!) {
      conference(id: $conferenceId) {
        id
        name
        slogan
        startDate
      }
    }
  `;

  const query = {
    query: GET_CONFERENCE_INFO,
    variables: { conferenceId },
  };

  const { data } = await client.query(query);
  console.log("data", data);
  return data;
  // return data.slice(0, 4);
}
