import React from 'react'

const MainVideoTab = () => {
  return (
        <div className="min-h-screen flex flex-col justify-between pb-16">
      <div className="flex-1 flex items-center justify-center bg-black">
        <video 
          className="w-full max-w-md md:max-w-3xl" 
          controls 
          src="video/homevideo.mp4" 
        />
      </div>

      <div className="w-full">
        share and connect here
      </div>
    </div>
  )
}

export default MainVideoTab