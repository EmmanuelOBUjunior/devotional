import Image from 'next/image'
import React from 'react'

const Navbar = ({activeTab, setActiveTab}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-3 flex justify-around items-center md:hidden">
      <button className="flex items-center gap-2">
        <Image src="icons/victorylogo.svg" alt="Home" width={24} height={24} />
        <span className="text-sm">Home</span>
      </button>
      <button className="flex items-center gap-2">
        <Image src="icons/file.svg" alt="Devotion" width={24} height={24}/>
        <span className="text-sm">Devotion</span>
      </button>
    </div>
  )
}

export default Navbar