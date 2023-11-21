import React from "react";
import logo from "../images/logo.png";
import { IoIosSunny } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <div className="text-center leading-10 mt-52 text-[38px]">
        Let's work together.
        <br />
        <span className="text-gray-400 hover:text-[#d1d1d1]">
          Get in touch .
        </span>
      </div>

      <div className=" mt-52 text-sm">
        <div className="flex  float-left mx-[14rem]   ">
          <img src={logo} alt='logo'/>
          <p className="ml-[1.5rem]"> © Oli Harris 2023 </p>
        </div>
        <div className="float-right mx-[17rem] mb-10 gap-4 flex">
          <p>
            <a
              className="hover:text-slate-300 hover:underline"
              href="https://twitter.com/i/flow/single_sign_on">
              Twitter
            </a>
          </p>
          <p>
            <a
              className="hover:text-slate-300 hover:underline"
              href="https://www.facebook.com/">
              Facebook
            </a>
          </p>
          <p>
            <a
              className="hover:text-slate-300 hover:underline"
              href="https://www.linkedin.com/feed/">
              Linkdin
            </a>
          </p>
        </div>
        <div className="fixed bottom-8 left-0  right-0 mx-auto text-center w-[98px]">
          <button className=" bg-slate-950 text-white rounded-full 
          flex items-center gap-2 p-2.5 px-6 text-[14px]">
            <IoIosSunny />
            shop
          </button>
        </div>
      </div>
    </div>
  );
}
