const devotions = [
    { date: "2024-07-01", title: "Devotion for July 1" },
    { date: "2024-06-30", title: "Devotion for June 30" },
    { date: "2024-06-29", title: "Devotion for June 29" },
    { date: "2024-06-28", title: "Devotion for June 28" },
    { date: "2024-06-27", title: "Devotion for June 27" },
  ];

const DevotionTab = () => {
  return (
    <div className="flex flex-col max-h-fit p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        {/* <div className="w-full h-60 bg-gray-200 rounded-md"> */}
        <video
            className="w-full h-full rounded-md"
            controls
            src="video/homevideo.mp4"
          />
        {/* </div> */}
      </div>
      <div className="flex flex-col md:flex-row gap-6 flex-grow">
        <div className="flex flex-col bg-white p-6 shadow-md md:w-2/3 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase">
              Hearing God&apos;s Voice
            </h2>
            <p className="text-[#6C6C6C]">25-Nov-2024</p>
          </div>
          <div className="border-2 border-[#EFAA2B] rounded-lg p-3 mt-3">
            <h3 className="text-[#6C6C6C] font-bold">Scripture Reading</h3>
            <p className="text-lg">John 10:27</p>
          </div>
          <div className="mt-5 container mx-auto">
          <p className="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="text-gray-700 text-justify mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="border-2 border-[#2B88EF] bg-[#F4F8FC] rounded-lg p-3 mt-3 container mx-auto">
              <h3 className="text-[#6C6C6C] font-bold">Scripture Reading</h3>
              <p className="text-md text-justify">Lord, thank you for speaking to me and desiring a relationship with me. Help me to recognize Your voice amidst the noise of this world. Guide me as I seek to listen and follow your lead. May my heart be receptive, my mind attentive, and my spirit obedient to Your voice. Teach me to be still and know that You are God. In Jesus&apos; Name, I pray. Amen.</p>
            </div>
        </div>
        <div className="flex-1 bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Last 5 Days</h2>
            <ul className="space-y-4">
              {devotions.map((devotion, index) => (
                <li key={index}>
                  <a
                    href={`/devotion/${devotion.date}`}
                    className="text-blue-500 hover:underline"
                  >
                    {devotion.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      </div>
    </div>
  );
};

export default DevotionTab;
