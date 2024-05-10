import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import winniethepooh from "../images/Pino-Winnie-Winnie-the-Pooh-2.32.png";
import eeyore from "../images/Pino-Winnie-Eeyore.32.png";
import "./style.css";

function Navigation() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const location = useLocation();

  return (
    <>
      <div
        className="text-[#fff2b3] dark:text-[#ed919e] flex flex-col justify-center items-center p-4 duration-700"
        style={{
          position: "fixed",
          left: "15%",
          fontFamily: "Concert One",
        }}
      >
        <nav>
          <ul className="flex gap-7 pt-3 justify-start items-center border-none text-[1.2rem]">
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="link "
            >
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/quiz"
                className={`nav-link ${
                  location.pathname === "/quiz" ? "active" : ""
                }`}
              >
                Quiz
              </Link>
            </motion.li>
            {theme === "light" ? (
              <motion.img
                className="duration:300 drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                src={winniethepooh}
                alt="winnie-the-pooh icon"
              />
            ) : (
              <motion.img
                className="duration:300 drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                src={eeyore}
                alt="eeyore icon"
              />
            )}
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/score"
                className={`nav-link ${
                  location.pathname === "/score" ? "active" : ""
                }`}
              >
                Score
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/evaluatecourse"
                className={`nav-link ${
                  location.pathname === "/evaluatecourse" ? "active" : ""
                }`}
              >
                Evaluate the course
              </Link>
            </motion.li>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ml-[450px] text-3xl"
            >
              <motion.div whileTap={{ scale: 0.7 }}>
                {theme === "light" ? (
                  <MoonOutlined
                    className="theme-icon"
                    onClick={handleThemeSwitch}
                  />
                ) : (
                  <SunOutlined
                    className="theme-icon"
                    onClick={handleThemeSwitch}
                  />
                )}
              </motion.div>
            </motion.div>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
