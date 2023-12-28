import React, { useState } from "react";

export default function Navbar() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className="absolute left-0 right-0 top-0.1% bottom-94% bg-gray-100 ml-5 mt-5">
      {/* Navigation Links */}
      <div className="absolute left-0 right-0 top-0 bottom-0">
        {/* Home */}
        <div
          className={`absolute h-6 left-[70.97%] right-[26.39%] top-[calc(50% - 24px/2 + 1px)] font-normal text-sm line-height-6 ${
            selectedNavItem === "home" ? "text-black" : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleNavItemClick("home")}
        >
          Home
        </div>

        {/* About */}
        <div
          className={`absolute h-6 left-[77.08%] right-[20.28%] top-[calc(50% - 24px/2 + 1px)] font-normal text-sm line-height-6 ${
            selectedNavItem === "about" ? "text-black" : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleNavItemClick("about")}
        >
          About
        </div>

      

        {/* Contact */}
        <div
          className={`absolute w-12 h-6 left-[85%] top-[calc(50% - 24px/2 + 1px)] font-normal text-sm line-height-6 ${
            selectedNavItem === "contact" ? "text-black" : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleNavItemClick("contact")}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
