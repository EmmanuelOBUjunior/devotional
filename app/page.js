'use client'
import { useState } from 'react';
import MainVideoTab from './components/MainVideoTab';
import DevotionTab from './components/DevotionTab';
export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div>
      {activeTab === 'home' &&(
        <MainVideoTab/>
      )}
      {activeTab === 'devotional' &&(
        <DevotionTab/>
      )}
    </div>

  );
}
