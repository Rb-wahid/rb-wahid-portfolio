import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import video from "../assets/video/raihan.mp4";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 pr-3 mt-2 sticky top-0 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#!">Item 1</a>
            </li>
            <li tabIndex="0">
              <a href="#!" class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a href="#!">Submenu 1</a>
                </li>
                <li>
                  <a href="#!">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">Item 3</a>
            </li>
          </ul>
        </div>
        <a href="#!">
          <video src={video} width="240" autoPlay loop muted />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex text-secondary text-xl font-semibold">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contactMe">CONTACT ME</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a href="#!" class="btn btn-secondary flex justify-center items-center">
          <span> LINKEDIN</span>
          <FaLinkedin className="ml-2 w-5 h-6" />
        </a>
        <a
          href="#!"
          class="btn btn-secondary flex justify-center items-center mx-8"
        >
          <span> GITHUB</span>
          <FaGithub className="ml-2 w-5 h-6" />
        </a>
        <a href="#!" class="btn btn-secondary flex justify-center items-center">
          <span> RESUME</span>
          <FaDownload className="ml-2 w-5 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
