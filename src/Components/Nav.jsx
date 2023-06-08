import React, { useContext, useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { RiSettings5Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { RiUser6Line } from "react-icons/ri";
import ContactLogo from "../images/contact-logo.svg";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setSearchContact } from "../redux/services/contactSlice";
import Logout from "./Logout";
import GoogleApps from "./GoogleAppsScroll/GoogleApps";
import ChangePassword from "./ChangePassword";
import { ToggleContext } from "../Context/ToggleProvider";

const Nav = () => {
  const user = JSON.parse(Cookies.get("user"));
  const dispatch = useDispatch();

  const searchContact = useSelector(
    (state) => state.contactSlice.searchContact
  );
  // console.log(searchContact);

  const { toggleSitebar, isOpen, randomColor } = useContext(ToggleContext);

  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
    setShowApp(false);
    setShowSetting(false);
  };

  const [showApp, setShowApp] = useState(false);
  const handleToggleApp = () => {
    setShowApp(!showApp);
    setShow(false);
    setShowSetting(false);
  };

  const [showSetting, setShowSetting] = useState(false);
  const handleToggleSetting = () => {
    setShowSetting(!showSetting);
    setShowApp(false);
    setShow(false);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2 pt-2">
        <div className="w-[15%] flex items-center space-x-2">
          <div className="relative group">
            <button
              onClick={toggleSitebar}
              className="w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-secondary-200"
            >
              <BiMenu className="text-secondary-500 text-2xl" />
            </button>
            <span className="hidden group-hover:block absolute top-[50px] -left-2 w-[100px] p-1 bg-secondary-500 text-white font-bold rounded scale-[80%]">
              <p className="ml-1">Main menu</p>
            </span>
          </div>
          <img src={ContactLogo} className="w-[40px] hidden md:block" alt="" />
          <h1 className="text-2xl text-slate-600">Contacts</h1>
        </div>
        <div className="w-[70%] flex justify-between items-center">
          <div className="w-[68%] h-[48px] flex justify-start items-center space-x-4 rounded-lg md:bg-secondary-300">
            <div className="hidden md:flex w-[40px] h-[40px] justify-center items-center rounded-full hover:bg-secondary-200 ml-2">
              <AiOutlineSearch className="text-secondary-500 text-2xl font-bold" />
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(setSearchContact(e.target.value))}
              value={searchContact}
              className="outline-none w-[90%] bg-secondary-300 hidden md:flex"

            />
          </div>
          <div className="flex justify-center items-center rounded-full space-x-6">
            <div className="relative group cursor-pointer">
              <svg
                width="20"
                height="20"
                fill="#686b70"
                viewBox="0 0 24 24"
                class="NSy2Hd cdByRd RTiFqe null"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
              </svg>
              <span className="hidden z-20 group-hover:block absolute top-6 -left-10 w-[100px] p-2 bg-secondary-500 text-white font-bold rounded scale-[70%]">
                <p>Help menu</p>
              </span>
            </div>
            <div
              onClick={handleToggleSetting}
              className="relative group cursor-pointer"
            >
              <RiSettings5Line className="text-secondary-500 text-2xl" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#686b70"
                class="NSy2Hd cdByRd RTiFqe null"
              >
                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
                <circle cx="12" cy="12" r="3.5"></circle>
              </svg>
              <span className="hidden z-20 group-hover:block absolute top-7 -left-12 w-[125px] p-2 bg-secondary-500 text-white font-bold rounded scale-[70%]">
                <p>Settings menu</p>
              </span>
            </div>
            <ChangePassword showSetting={showSetting} />
          </div>
        </div>
        <div className="w-[7%] flex items-center space-x-4">
          <div
            onClick={handleToggleApp}
            className="relative group w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full hover:bg-secondary-200"
          >
            <CgMenuGridO className="text-secondary-500 text-2xl" />
            <span className="hidden z-10 group-hover:block absolute top-12 -left-10 w-[120px] p-2 bg-secondary-500 text-white font-bold rounded scale-[70%]">
              <p>Google Apps</p>
            </span>
          </div>
          <GoogleApps showApp={showApp} />
          <div className="relative group ">
            <div
              onClick={handleToggle}
              style={{ backgroundColor: randomColor }}
              className="w-[35px] h-[35px] group-hover:ring-1 ring-primary-300 select-none cursor-pointer flex justify-center items-center rounded-full text-white"
            >
              <span>{user?.name.charAt().toUpperCase()}</span>
            </div>
            <Logout show={show} randomColor={randomColor} user={user} />
            <span className="-z-50 group-hover:block hidden absolute -right-2 top-11 text-start rounded  tracking-wider scale-[90%]  w-[200px] p-2 bg-secondary-500">
              <h6 className="text-sm font-bold text-white leading-tight">
                Google Account
              </h6>
              <p className="text-xs text-slate-300 font-semibold leading-tight">
                {user?.name}
              </p>
              <p className="text-xs text-slate-300 font-semibold leading-tight">
                {user?.email}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className=" flex-grow relative mx-5 -z-1 md:hidden">
        <BiSearch className="absolute top-3 text-gray-500 left-4 text-lg"/>
        <input
          onChange={(e) => dispatch(setSearchContact(e.target.value))}
          type="text"
          className="pl-12  shadow-sm focus-within:outline-none bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          value={searchContact}
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Nav;
