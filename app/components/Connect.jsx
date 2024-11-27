import Link from "next/link";
import {FaFacebook, FaYoutube, FaGlobe} from 'react-icons/fa'

const Connect = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-white">Connect with us</span>
      <div className="flex gap-3">
        <Link href="/">
          <FaFacebook className="bg-white text-blue-500 rounded-md" size={30} />
        </Link>
        <Link href="/">
          <FaYoutube className="bg-white text-blue-500 rounded-md" size={30} />
        </Link>
        <Link href="/">
          <FaGlobe className="bg-white text-blue-500 rounded-md" size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Connect;
