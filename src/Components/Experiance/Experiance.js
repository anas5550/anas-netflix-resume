import React from "react";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { AiOutlineSetting, AiFillCalendar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Experiance = () => {
  return (
    <div className="container-fluid my-4 px-2">
      <div className="row">
        <p className="text-white text-2xl font-semibold heading uppercase">
          Experiance
        </p>

        <div className="col-md-3 rounded-md h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4  m-2">
          <p className="text-white text-[30px] text-center uppercase">
            Acronotics
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <PiSuitcaseSimpleFill color="#E50914" size={25} className="mr-2" />
            Full stack developer
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <AiFillCalendar color="#E50914" size={25} className="mr-2" />
            Feb 2023 - Present
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <ImLocation color="#E50914" size={25} className="mr-2" />
            Bangalore, IN
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize text-justify">
            Recently build a feature where user has a multi level approval and
            rejection access, with email send functionality. And also on daily
            basis fixing multitude of bugs and implementing neumerous features.
          </p>
        </div>

        <div className="col-md-3 rounded-md h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4  m-2">
          <p className="text-white text-[30px] text-center uppercase">
            AB-InBev
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <PiSuitcaseSimpleFill color="#E50914" size={25} className="mr-2" />
            Full stack developement Intern
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <AiFillCalendar color="#E50914" size={25} className="mr-2" />
            July 2022 - Dec 2022
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize">
            <ImLocation color="#E50914" size={25} className="mr-2" />
            Bangalore, IN
          </p>
          <p className="text-white flex justify-start my-2 items-start p-0 capitalize text-justify">
            Worked in the PWA RNM team, where I developed many features and
            resolved a multitude of bugs for multiple web applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
