import Image from "next/image";
import { FaBook } from "react-icons/fa";


const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <nav className="mx-auto flex bg-white shadow-md rounded-full p-2 space-x-16 items-center border-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-2 p-2 rounded-full font-bold ${
              activeTab === "home" ? "bg-blue-500 text-white" : "text-[#6C6C6C]"
            }`}
          >
            <div className="border-2 bg-white border-[#A6362E] rounded-full w-8 h-8 flex items-center justify-center">
            <Image
              src="icons/victorylogo.svg"
              alt="Home"
              width={24}
              height={24}
            />
            </div>
            <span className="text-sm">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("devotional")}
            className={`flex items-center gap-2 p-2 rounded-full font-bold ${
                activeTab === "devotional" ? "bg-blue-500 text-white" : "text-[#6C6C6C]"
              }`}
          >
            {/* <Image src="icons/file.svg" alt="Devotion" width={24} height={24}/> */}
            <FaBook width={24} height={24}/>
            <span className="text-sm">Devotion</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
