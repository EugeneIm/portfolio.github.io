import React, { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="nav_ac">
      <CgDarkMode />
    </div>
  );
};

export default Themetoggle;
