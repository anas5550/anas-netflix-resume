import React from "react";
import { BsStackOverflow, BsInstagram } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <p className="text-white text-2xl font-semibold heading uppercase">
          Links
        </p>

        <div className="col-md-12 rounded-md  my-2 flex justify-start items-start flex-wrap">
          <LinkCards
            Logo={SiLeetcode}
            title="Leetcode"
            location="https://leetcode.com/anas_sidd/"
          />
          <LinkCards
            Logo={BsStackOverflow}
            title="Stack Overflow"
            location="https://stackoverflow.com/users/14932353/mohd-anas-siddiqui"
          />
          <LinkCards
            Logo={BiLogoPlayStore}
            title="Play store"
            location="https://play.google.com/store/apps/details?id=com.bharatrto"
          />

          <LinkCards
            Logo={FaLinkedin}
            title="LinkedIn"
            location="https://www.linkedin.com/in/anas91612/"
          />
          <LinkCards
            Logo={FaGithub}
            title="Github"
            location="https://github.com/anas5550"
          />
          <LinkCards
            Logo={BsInstagram}
            title="Instagram"
            location="https://www.instagram.com/er_anas_sidd/"
          />
          <LinkCards
            Logo={CiFacebook}
            title="Facebook"
            location="https://www.facebook.com/anas.siddiqui.7906/"
          />
        </div>
      </div>
    </div>
  );
};

const LinkCards = ({ Logo, title, location }) => {
  return (
    <Link
      className="p-4 mx-2 my-2 rounded-md text-white flex justify-start items-start capitalize bg-[#2D2D2D] hover:scale-125 shadow-md"
      to={location}
      target="blank"
    >
      <Logo color="#E50914" size={25} className="mr-1" />
      {title}
    </Link>
  );
};

export default Links;
