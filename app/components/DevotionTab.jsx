import React from "react";

const DevotionTab = () => {
  return (
    <div className="flex flex-col max-h-fit p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <div className="w-full h-60 bg-gray-200 rounded-md">
          <video
            className="w-full max-w-md md:max-w-3xl"
            controls
            src="video/homevideo.mp4"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 flex-grow">
        
      </div>
    </div>
  );
};

export default DevotionTab;
