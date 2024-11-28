"use client";
import { useState } from "react";
import MainVideoTab from "./components/MainVideoTab";
import DevotionTab from "./components/DevotionTab";
import Navbar from "./components/Navbar";
export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {activeTab === "home" && <MainVideoTab />}
      {activeTab === "devotional" && <DevotionTab title='Hearing the voice of God' url='https://devotional-nu.vercel.app/' />}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
