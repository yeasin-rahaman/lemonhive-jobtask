import React from "react";
import logo from "../../../public/Assets/Images/React_white.png";
import menuIcon from "../../../public/Assets/Images/quill_hamburger.svg";
import line from "../../../public/Assets/Images/line.png";
import lineResponsive from "../../../public/Assets/Images/Vector_1.png";
import bannerSmallImg from "../../../public/Assets/Images/person_infront_of_mike.png";
import bannerSmallSvg from "../../../public/Assets/Images/Ornament_13.svg";
import bannerBigImg from "../../../public/Assets/Images/group_of_people.png";
import bannerBigSvg from "../../../public/Assets/Images/Star.svg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto py-28 px-5 z-10">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-10">
          <div className="">
            <div className="relative w-fit mx-auto z-10">
              <h1 className="head-1 md:!text-[80px] lg:!text-[100px] 2xl:!text-[140px] text-ctDeepBlue leading-[0.95] text-right">
                React <br /> Conference
              </h1>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="85"
                  height="82"
                  viewBox="0 0 85 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M73.031 42.8774C70.134 32.4492 66.9479 22.1626 63.6193 11.8684"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M53.6393 56.9414C46.6223 46.8978 38.046 38.1937 30.0961 28.9369"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40.4285 76.3598C31.2833 71.7456 21.3856 67.9994 11.2326 66.7087"
                    stroke="#FFC93E"
                    stroke-width="2"
                    stroke-miterlimit="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute top-0 right-0 translate-x-[70%] -z-10 hidden md:block">
                <Image
                  // className="w-20 h-auto"
                  src={line}
                  alt="line"
                />
              </div>
              <div className="absolute top-4 right-0  scale-125 -z-10 block md:hidden">
                <Image
                  // className="w-20 h-auto"
                  src={lineResponsive}
                  alt="line"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-[1fr,1.5fr] gap-10 justify-center  md:gap-16 mt-10">
              <div className="relative hidden md:block z-10">
                <Image
                  className="w-40 md:w-full h-auto z-10"
                  src={bannerSmallImg}
                  alt="line"
                />
                <Image
                  className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 -z-10"
                  src={bannerSmallSvg}
                  alt="line"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="body-text1 !font-medium mb-10 md:mb-16 text-center md:text-left">
                  Lorem uis diam turpis quam id fermentum.In quis diam turpis
                  quam id fermentum..id fermentum.In quis diam turpis quam id
                  fermentum.
                </p>

                <button className="w-fit bg-ctYellow rounded-full h-14 px-10 md:px-20 flex items-center justify-center gap-2 body-text1 !font-medium">
                  Buy Tickets
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
                      d="M17.5002 3.125C17.5002 2.95924 17.4343 2.80027 17.3171 2.68306C17.1999 2.56585 17.0409 2.5 16.8752 2.5H9.37518C9.20942 2.5 9.05045 2.56585 8.93324 2.68306C8.81603 2.80027 8.75018 2.95924 8.75018 3.125C8.75018 3.29076 8.81603 3.44973 8.93324 3.56694C9.05045 3.68415 9.20942 3.75 9.37518 3.75H15.3664L2.68268 16.4325C2.62457 16.4906 2.57847 16.5596 2.54703 16.6355C2.51558 16.7114 2.49939 16.7928 2.49939 16.875C2.49939 16.9572 2.51558 17.0386 2.54703 17.1145C2.57847 17.1904 2.62457 17.2594 2.68268 17.3175C2.74079 17.3756 2.80978 17.4217 2.8857 17.4532C2.96162 17.4846 3.043 17.5008 3.12518 17.5008C3.20736 17.5008 3.28873 17.4846 3.36466 17.4532C3.44058 17.4217 3.50957 17.3756 3.56768 17.3175L16.2502 4.63375V10.625C16.2502 10.7908 16.316 10.9497 16.4332 11.0669C16.5504 11.1842 16.7094 11.25 16.8752 11.25C17.0409 11.25 17.1999 11.1842 17.3171 11.0669C17.4343 10.9497 17.5002 10.7908 17.5002 10.625V3.125Z"
                      fill="#0A142F"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end z-10">
            <div className="relative">
              <Image
                // className="w-20 h-auto"
                src={bannerBigImg}
                alt="group of people"
              />
              <Image
                className="absolute bottom-0 right-10 translate-x-1/2 md:left-0 md:-translate-x-1/2 translate-y-1/2 "
                src={bannerBigSvg}
                alt="group of people"
              />
            </div>
          </div>
          <div className="relative mt-10 block md:hidden z-10">
            <Image
              className="w-40 md:w-auto h-auto"
              src={bannerSmallImg}
              alt="line"
            />
            <Image
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 -z-10"
              src={bannerSmallSvg}
              alt="line"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
