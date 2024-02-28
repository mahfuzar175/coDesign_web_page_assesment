import { GrImage } from "react-icons/gr";
import Container from "./Container";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 pr-2 mr-2 text-orange-500 text-lg font-extrabold">
                <GrImage className="mr-1 w-7 h-7" />
                CLICK MOTTO
              </div>
              <div className="flex-none hidden lg:block font-medium">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                    <a>Explore</a>
                  </li>
                  <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                    <a>Discover</a>
                  </li>
                  <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                    <a>For Professionals</a>
                  </li>
                  <li className="font-medium">
                    <details>
                      <summary>...</summary>
                      <ul className="mt-3 z-[1] p-2 shadow dropdown-content bg-slate-800 rounded-sm w-48">
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">About Click Motto</a>
                        </li>
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">Pricing</a>
                        </li>
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">License</a>
                        </li>
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">Partnership</a>
                        </li>
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">Blog</a>
                        </li>
                        <li className="text-gray-300 hover:text-white">
                          <a className="justify-between">Help</a>
                        </li>
                        <hr/>
                    <li className="text-gray-300 hover:text-white">
                      <div className="flex gap-4">
                      <a><MdFacebook /></a>
                      <a><FaTwitter /></a>
                      <a><RiInstagramFill /></a>
                      <a><FaGithub /></a>
                      <a><FaLinkedin /></a>
                      </div>
                    </li>
                      </ul>
                    </details>
                  </li>
                  <li className="text-gray-500 ml-3 font-medium hover:text-black hover:font-semibold">
                    <a className="border border-gray-500">Submit Photos</a>
                  </li>
                </ul>
              </div>
              <button className="ml-3 text-gray-500 font-medium hover:text-black hover:font-semibold ">Login</button>
              <button className="ml-4 py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium hover:font-semibold">Join Free</button>
            </div>

          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                <a>Explore</a>
              </li>
              <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                <a>Discover</a>
              </li>
              <li className="text-gray-500 font-medium hover:text-black hover:font-semibold">
                <a>For Professionals</a>
              </li>
              <li className="font-medium">
                <details>
                  <summary>...</summary>
                  <ul className="mt-3 z-[1] p-2 shadow dropdown-content bg-slate-800 rounded-sm w-48">
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">About Click Motto</a>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">Pricing</a>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">License</a>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">Partnership</a>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">Blog</a>
                    </li>
                    <li className="text-gray-300 hover:text-white">
                      <a className="justify-between">Help</a>
                    </li>
                    <hr/>
                    <li className="text-gray-300 hover:text-white">
                      <div className="flex gap-4">
                      <a><MdFacebook /></a>
                      <a><FaTwitter /></a>
                      <a><RiInstagramFill /></a>
                      <a><FaGithub /></a>
                      <a><FaLinkedin /></a>
                      </div>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-gray-500 mt-4 font-medium hover:text-black hover:font-semibold">
                <a className="border border-gray-500">Submit Photos</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
