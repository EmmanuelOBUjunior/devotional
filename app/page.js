"use client";
import { useState } from "react";
import MainVideoTab from "./components/MainVideoTab";
import DevotionTab from "./components/DevotionTab";
import Navbar from "./components/Navbar";
export default function Home() {
  const [activeTab, setActiveTab] = useState("devotional");

  return (
    <div>
      {activeTab === "home" && <MainVideoTab />}
      {activeTab === "devotional" && <DevotionTab />}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
