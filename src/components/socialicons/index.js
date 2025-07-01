import React from "react";
import "./style.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiSodaCan } from "react-icons/gi";
import { socialprofils } from "../../content";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.monster && (
          <li>
            <a href={socialprofils.monster}>
              <GiSodaCan />
            </a>
          </li>
        )}
      </ul>
      <p>Socials</p>
    </div>
  );
};
