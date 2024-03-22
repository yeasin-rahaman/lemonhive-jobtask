import React from "react";
import logo from "../../../public/Assets/Images/React.svg";
import menuIcon from "../../../public/Assets/Images/quill_hamburger.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="hidden lg:block container max-w-[1340px] mx-auto px-5 py-10">
        <div className="flex gap-5 justify-between items-center">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="logo"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            /></Link>

          <div className="nav flex gap-14">
            <Link className="text-lg font-medium" href="/">
              About us
            </Link>
            <Link className="text-lg font-medium" href="/">
              What We do
            </Link>
            <Link className="text-lg font-medium" href="/">
              Our work
            </Link>
            <Link className="text-lg font-medium" href="/">
              Blog
            </Link>
            <Link className="text-lg font-medium" href="/">
              Say hi
            </Link>
          </div>

          <div className="cursor-pointer">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.55249 18H23.6578M4.55249 6H23.6578H4.55249ZM4.55249 12H23.6578H4.55249Z"
                stroke="#0A142F"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>

      <header className="responsive-header bg-white block lg:hidden px-5 py-10">
        <div className="flex gap-3 justify-between">
          <Link href="/">
            <Image
              className="w-20 h-auto"
              src={logo}
              alt="logo"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </Link>
          <div className="cursor-pointer">
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.55249 18H23.6578M4.55249 6H23.6578H4.55249ZM4.55249 12H23.6578H4.55249Z"
                stroke="#0A142F"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
