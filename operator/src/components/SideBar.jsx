import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { AiOutlineBarChart } from "react-icons/ai"; // Import icons from react-icons

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
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState("light");

  // handle on RTL change event
  const handleRTLChange = (e) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle on image change event
  const handleImageChange = (e) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles = {
    root: {
      fontSize: "15px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <>
      <div
        className="sticky top-0 h-screen overflow-y-auto"
        style={{
          direction: rtl ? "rtl" : "ltr",
        }}
      >
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onBackdropClick={() => setToggled(false)}
          onBreakPoint={setBroken}
          // image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
          rtl={rtl}
          breakPoint="1056px"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflowY: "initial",
            }}
          >
            <div rtl={rtl} style={{ marginBottom: "24px", marginTop: "16px" }}>
              Pro Slider
            </div>
            <div style={{ marginBottom: "2px" }}>
              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <h2
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  General
                </h2>
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                <SubMenu
                  label="Charts"
                  icon={<AiOutlineBarChart />}
                  suffix={<p>6</p>}
                >
                  <MenuItem> Pie charts</MenuItem>
                  <MenuItem> Line charts</MenuItem>
                  <MenuItem> Bar charts</MenuItem>
                </SubMenu>
                <SubMenu label="Maps" icon={<AiOutlineBarChart />}>
                  <MenuItem> Google maps</MenuItem>
                  <MenuItem> Open street maps</MenuItem>
                </SubMenu>
                <SubMenu label="Theme" icon={<AiOutlineBarChart />}>
                  <MenuItem> Dark</MenuItem>
                  <MenuItem> Light</MenuItem>
                </SubMenu>
                <SubMenu label="Components" icon={<AiOutlineBarChart />}>
                  <MenuItem> Grid</MenuItem>
                  <MenuItem> Layout</MenuItem>
                  <SubMenu label="Forms">
                    <MenuItem> Input</MenuItem>
                    <MenuItem> Select</MenuItem>
                    <SubMenu label="More">
                      <MenuItem> CheckBox</MenuItem>
                      <MenuItem> Radio</MenuItem>
                    </SubMenu>
                  </SubMenu>
                </SubMenu>
                <SubMenu label="E-commerce" icon={<AiOutlineBarChart />}>
                  <MenuItem> Product</MenuItem>
                  <MenuItem> Orders</MenuItem>
                  <MenuItem> Credit card</MenuItem>
                </SubMenu>
              </Menu>

              <div
                style={{
                  padding: "0 24px",
                  marginBottom: "8px",
                  marginTop: "32px",
                }}
              >
                <h2
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  Extra
                </h2>
              </div>

              <Menu menuItemStyles={menuItemStyles}>
                <MenuItem icon={<AiOutlineBarChart />} suffix={<p>New</p>}>
                  Calendar
                </MenuItem>
                <MenuItem icon={<AiOutlineBarChart />}>Documentation</MenuItem>
                <MenuItem>Examples</MenuItem>
              </Menu>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
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
        <div className="my-2 mx-6 fixed w-full block">
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
