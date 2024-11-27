import Image from "next/image";
import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <nav className="mx-auto flex bg-white shadow-md rounded-full p-4 space-x-16 items-center border-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-2 border-2 p-2 rounded-full font-bold ${
              activeTab === "home" ? "bg-blue-500 text-white" : "text-[#6C6C6C]"
            }`}
          >
            <Image
              src="icons/victorylogo.svg"
              alt="Home"
              width={24}
              height={24}
            />
            <span className="text-sm">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("devotional")}
            className="flex items-center gap-2 font-bold"
          >
            <Image src="icons/file.svg" alt="Devotion" width={24} height={24} />
            <span className="text-sm">Devotion</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
