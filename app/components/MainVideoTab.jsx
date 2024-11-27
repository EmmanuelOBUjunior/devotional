import React from 'react'

const MainVideoTab = () => {
  return (
        <div className="min-h-screen flex flex-col justify-between pb-16">
      <div className="flex m-auto flex-col items-center justify-center">
        <video 
          className="w-full max-w-md md:max-w-3xl" 
          controls 
          src="video/homevideo.mp4" 
        />
      <div className="w-full">
        share and connect here
      </div>
      </div>

    </div>
  )
}

export default MainVideoTab