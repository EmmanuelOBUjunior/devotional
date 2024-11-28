import {
  FaChevronRight,
  FaFacebook,
  FaLink,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Connect from "./Connect";
import Link from "next/link";

const devotions = [
  {
    id: 1,
    date: "2024-05-27",
    title: "Finding Peace in Uncertain Times",
    url: "/",
  },
  {
    id: 2,
    date: "2024-05-26",
    title: "The Power of Forgiveness",
    url: "/",
  },
  {
    id: 3,
    date: "2024-05-25",
    title: "Walking in Love",
    url: "/",
  },
  {
    id: 4,
    date: "2024-05-24",
    title: "Trusting God's Plan",
    url: "/",
  },
  {
    id: 5,
    date: "2024-05-23",
    title: "Hope in Difficult Times",
    url: "/",
  },
];

const DevotionTab = ({ title, url }) => {
    const [copied, setCopied] = useState(false)
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col px-4 py-20 max-w-4xl mx-auto">
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
        <div className="flex flex-col bg-white p-6 md:w-3/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase">
              Hearing God&apos;s Voice
            </h2>
            <p className="text-[#6C6C6C] text-sm md:text-lg">25-Nov-2024</p>
          </div>
          <div className="border-2 border-[#EFAA2B] rounded-lg p-3 mt-3">
            <h3 className="text-[#6C6C6C] font-bold">Scripture Reading</h3>
            <p className="text-lg">John 10:27</p>
          </div>
          <div className="mt-5 container mx-auto">
            <p className="text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="text-gray-700 text-justify mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="border-2 border-[#2B88EF] bg-[#F4F8FC] rounded-lg p-3 my-3 container mx-auto">
            <h3 className="text-[#6C6C6C] font-bold">Scripture Reading</h3>
            <p className="text-md text-justify">
              Lord, thank you for speaking to me and desiring a relationship
              with me. Help me to recognize Your voice amidst the noise of this
              world. Guide me as I seek to listen and follow your lead. May my
              heart be receptive, my mind attentive, and my spirit obedient to
              Your voice. Teach me to be still and know that You are God. In
              Jesus&apos; Name, I pray. Amen.
            </p>
          </div>
          <div className="bg-[#1837C2] p-2 rounded-lg mb-6">
            <p className="">Share with your community</p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <Link
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  title
                )} ${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white" size={24} />
              </Link>

              {/* Twitter */}
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  title
                )}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white" size={24} />
              </Link>

              {/* Facebook */}
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-white" size={24} />
              </Link>

              {/* Copy Link */}
              <button
                onClick={copyLink}
                className={`${copied && "text-white font-bold text-xs"}`}
              >
                {copied ? (
                  "Link Copied!"
                ) : (
                  <FaLink className="text-white" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-6">
          <div className="bg-[#1837C2] p-2 rounded-lg mb-6">
            <Connect />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Past Devotions</h2>
          <div className="space-y-4">
            {devotions.map(({ id, title, date, url }) => (
              <Link
                href={url}
                key={id}
                className="flex justify-between items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition duration-200"
              >
                <div>
                  <h4 className="font-medium">{title}</h4>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
                <FaChevronRight className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevotionTab;
