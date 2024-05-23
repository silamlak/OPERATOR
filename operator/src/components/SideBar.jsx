import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaBusAlt, FaRoute } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import { MdPlaylistAddCircle } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { AiOutlineBarChart } from "react-icons/ai"; // Import icons from react-icons
import Switcher from "./Switcher";
import useDarkSide from "../theme";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState("light");

  const menuItemStyles = {
    button: {
      "&:hover": {
        backgroundColor: "inherit",
      },
    },
  };

  return (
    <>
      <div className="sticky top-0 h-screen overflow-y-auto z-50 border-none">
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onBackdropClick={() => setToggled(false)}
          onBreakPoint={setBroken}
          breakPoint="1056px"
          backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor)}
          className="hover:bg-white dark:hover:bg-slate-950 h-screen dark:!border-r-gray-600 !border-r-gray-200"
          menuItemStyles={menuItemStyles}
        >
          <div
            style={{
              overflowY: "initial",
            }}
            className="flex flex-col h-full bg-white dark:bg-slate-950 relative"
          >
            {/* first header*/}

            <div className="my-4 p-1 flex items-center justify-start gap-2">
              <span className="text-3xl text-lime-500">
                <FaBusAlt />
              </span>
              <p
                style={{ opacity: collapsed ? 0 : 1, letterSpacing: "0.5px" }}
                className=" text-gray-900 dark:text-white font-bold text-xl"
              >
                HABESHA BUS
              </p>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 shadow-xl bg-white dark:bg-slate-950 rounded-full hover:shadow-none absolute top-0 right-[-9px]"
              >
                <span className="text-sm text-gray-900 dark:text-gray-100">
                  {collapsed ? <MdArrowForwardIos /> : <MdArrowBackIosNew />}
                </span>
              </button>
            </div>

            {/* first nav list*/}

            <div className="bg-white dark:bg-slate-950 mb-[2px]">
              {/* first nav header*/}

              <div className="px-6 mb-2 bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300">
                <h2
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  General
                </h2>
              </div>

              {/* first menu */}

              <Menu
                menuItemStyles={menuItemStyles}
                className="dark:bg-slate-950 bg-white text-gray-900 dark:text-gray-100"
              >
                <SubMenu
                  label="Bus"
                  icon={<FaBusSimple className="text-lime-600 text-lg" />}
                  suffix={<p></p>}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                >
                  <MenuItem
                    icon={
                      <MdPlaylistAddCircle className="text-lime-600 text-2xl" />
                    }
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                  >
                    Add Bus
                  </MenuItem>
                  <MenuItem
                    icon={<CiBoxList className="text-lime-600 text-2xl" />}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                  >
                    Bus List
                  </MenuItem>
                </SubMenu>

                <SubMenu
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                  label="Components"
                  icon={<AiOutlineBarChart />}
                >
                  <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                    {" "}
                    Grid
                  </MenuItem>
                  <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                    {" "}
                    Layout
                  </MenuItem>
                  <SubMenu
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                    label="Forms"
                  >
                    <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                      {" "}
                      Input
                    </MenuItem>
                    <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                      {" "}
                      Select
                    </MenuItem>
                    <SubMenu
                      className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                      label="More"
                    >
                      <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                        {" "}
                        CheckBox
                      </MenuItem>
                      <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950">
                        {" "}
                        Radio
                      </MenuItem>
                    </SubMenu>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label="Route"
                  icon={<FaRoute className="text-lime-600 text-lg" />}
                  suffix={<p></p>}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                >
                  <MenuItem
                    icon={
                      <MdPlaylistAddCircle className="text-lime-600 text-2xl" />
                    }
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                  >
                    Add Route
                  </MenuItem>
                  <MenuItem
                    icon={<CiBoxList className="text-lime-600 text-2xl" />}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 bg-white dark:bg-slate-950"
                  >
                    Route List
                  </MenuItem>
                </SubMenu>
              </Menu>

              {/* second nav header */}

              <div className="px-6 pb-2 mt-8 bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300">
                <h2
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  Extra
                </h2>
              </div>

              {/* second menu */}

              <Menu
                menuItemStyles={menuItemStyles}
                className="dark:bg-slate-950 bg-white text-gray-900 dark:text-gray-100"
              >
                <MenuItem
                  icon={<AiOutlineBarChart />}
                  suffix={
                    <p className="text-gray-500 dark:text-gray-400">New</p>
                  }
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Calendar
                </MenuItem>
                <MenuItem
                  icon={<Switcher />}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Theme
                </MenuItem>
                <MenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  Examples
                </MenuItem>
              </Menu>
            </div>

            <div className="flex justify-center pb-4 bg-white dark:bg-slate-950">
              {collapsed ? (
                <a
                  // href={codeUrl}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#607489",
                    cursor: "pointer",
                  }}
                ></a>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: "12px" }}></div>
                  <p>Pro Sidebar</p>
                  <p style={{ letterSpacing: 1, opacity: 0.7 }}>V</p>
                  <div style={{ marginTop: "16px" }}>
                    <a
                      // href={codeUrl}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "#607489",
                        cursor: "pointer",
                      }}
                    >
                      <p>View code</p>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Sidebar>

        <div className="my-2 mx-6 fixed text-gray-900 dark:text-gray-100 w-full block">
          {broken && (
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              <HiMenuAlt1 />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
