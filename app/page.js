'use client'
import { useState } from 'react';
import MainVideoTab from './components/MainVideoTab';
import DevotionTab from './components/DevotionTab';
export default function Home() {
  const [activeTab, setActiveTab] = useState('devotion')

  return (
    <div>
      {activeTab === 'home' &&(
        <MainVideoTab/>
      )}
      {activeTab === 'devotion' &&(
        <DevotionTab/>
      )}
    </div>

  );
}
