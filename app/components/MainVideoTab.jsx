import React from 'react'
import Connect from './Connect'
import Share from './Share'

const MainVideoTab = () => {
  return (
        <div className="min-h-screen flex flex-col px-4 justify-between pb-16">
      <div className="flex m-auto flex-col items-center justify-center">
        <video 
          className="w-full max-w-md md:max-w-3xl" 
          controls 
          src="video/homevideo.mp4" 
        />
      <div className="bg-[#1837C2] w-full flex flex-col md:flex-row md:px-4 items-center gap-3 p-2 rounded-lg mt-2 justify-between">
        <Connect/>
        <Share/>
      </div>
      </div>

    </div>
  )
}

export default MainVideoTab