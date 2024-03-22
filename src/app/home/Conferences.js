"use client";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import createApolloClient from "/apollo-client";
import "./conference.css";
import Link from "next/link";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const client = createApolloClient();
        const { data } = await client.query({
          query: gql`
            query {
              conferences {
                id
                name
                slogan
                startDate
              }
            }
          `,
        });
        setConferences(data.conferences);
        console.log(data.conferences);
      } catch (error) {
        console.error("Error fetching conference data:", error);
      }
    };

    fetchConferences();
  }, []);
  return (
    <div>
      <section className="container mx-auto py-28 px-5 z-10">
        <div className="flex flex-col items-center">
          <h2 className="head-1 mb-10">Conferences</h2>
          <ul className="timeline timeline-vertical">
            {conferences.map((conference, index) => (
              <li
                key={index}
                id={conference.id}
                className="gap-x-10 gap-y-16 lg:gap-10"
              >
                <div className="timeline-middle">
                  {index === 0 ? (
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="23.5"
                        fill="#FFF9EB"
                        stroke="#FFC93E"
                      />
                      <g clip-path="url(#clip0_43_123)">
                        <path
                          d="M31.9024 21.2969L21.938 34.7969C21.8915 34.8599 21.8309 34.911 21.761 34.9463C21.6911 34.9816 21.6139 35 21.5357 35C21.4697 35.0002 21.4045 34.9871 21.3438 34.9614C21.2404 34.9186 21.1545 34.8424 21.0997 34.7449C21.0449 34.6474 21.0244 34.5343 21.0415 34.4238L22.417 25.5H16.5C16.4075 25.5 16.3168 25.4743 16.238 25.4258C16.1592 25.3773 16.0954 25.3079 16.0537 25.2253C16.012 25.1428 15.994 25.0502 16.0018 24.958C16.0095 24.8658 16.0427 24.7776 16.0977 24.7031L26.062 11.2031C26.1284 11.1132 26.223 11.048 26.3308 11.0182C26.4385 10.9883 26.5532 10.9954 26.6564 11.0384C26.7596 11.0813 26.8455 11.1576 26.9003 11.2551C26.955 11.3526 26.9755 11.4656 26.9585 11.5761L25.583 20.5H31.5C31.5925 20.5 31.6833 20.5256 31.7621 20.5741C31.8409 20.6226 31.9047 20.692 31.9464 20.7746C31.9881 20.8572 32.0061 20.9498 31.9983 21.042C31.9905 21.1342 31.9573 21.2224 31.9024 21.2969Z"
                          fill="#FFC93E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_123">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(12 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="23.5"
                        fill="#F9FAFB"
                        stroke="#CDCDCD"
                      />
                      <g clip-path="url(#clip0_43_128)">
                        <path
                          d="M31.9024 21.2969L21.938 34.7969C21.8915 34.8599 21.8309 34.911 21.761 34.9463C21.6911 34.9816 21.6139 35 21.5357 35C21.4697 35.0002 21.4045 34.9871 21.3438 34.9614C21.2404 34.9186 21.1545 34.8424 21.0997 34.7449C21.0449 34.6474 21.0244 34.5343 21.0415 34.4238L22.417 25.5H16.5C16.4075 25.5 16.3168 25.4743 16.238 25.4258C16.1592 25.3773 16.0954 25.3079 16.0537 25.2253C16.012 25.1428 15.994 25.0502 16.0018 24.958C16.0095 24.8658 16.0427 24.7776 16.0977 24.7031L26.062 11.2031C26.1284 11.1132 26.223 11.048 26.3308 11.0182C26.4385 10.9883 26.5532 10.9954 26.6564 11.0384C26.7596 11.0813 26.8455 11.1576 26.9003 11.2551C26.955 11.3526 26.9755 11.4656 26.9585 11.5761L25.583 20.5H31.5C31.5925 20.5 31.6833 20.5256 31.7621 20.5741C31.8409 20.6226 31.9047 20.692 31.9464 20.7746C31.9881 20.8572 32.0061 20.9498 31.9983 21.042C31.9905 21.1342 31.9573 21.2224 31.9024 21.2969Z"
                          fill="#CDCDCD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_43_128">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(12 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                <Link
                  href={`/details/${conference.id}&${conference.startDate}`}
                  className={`timeline-end w-full max-w-[480px] -mb-[180px] lg:-mb-[60px] bg-[#F9FAFB] border-t-4 border-ctLightGray rounded-lg py-7 px-4 shadow-md flex gap-3 ${
                    index % 2 === 0 ? "lg:timeline-start" : "lg:timeline-end"
                  }`}
                >
                  <svg
                    className="mt-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#FFC93E" />
                    <circle cx="8" cy="8" r="3" fill="white" />
                  </svg>
                  <div className="">
                    <h3 className="head-4 text-ctDeepBlue mb-1">
                      {conference.name}
                    </h3>
                    <p className="body-text2 text-ctDeepGray">
                      {conference.slogan}
                    </p>
                  </div>
                </Link>
                <div
                  className={`timeline-end caption-text text-ctDeepGray ${
                    index % 2 === 0 ? "lg:timeline-end" : "lg:timeline-start"
                  }`}
                >
                  {conference.startDate}
                </div>
                {index === conferences.length - 1 ? (
                  <hr className="bg-ctLightGray !w-[3px] !h-[300%] hidden" />
                ) : (
                  <hr
                    className={`!w-[3px] !h-[300%] ${
                      index === 0 ? "bg-ctYellow" : "bg-ctLightGray"
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Conferences;

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query {
        conferences {
          id
          name
          slogan
          startDate
        }
      }
    `,
  });

  return {
    props: {
      conferences: data.conferences,
    },
  };
}
