import Link from "next/link";
import {FaFacebook, FaYoutube, FaGlobe} from 'react-icons/fa'

const Connect = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="font-semibold text-white">Connect with us</span>
      <div className="flex gap-3">
        <Link href="https://myvictorychurch.org/" target="_blank">
          <FaFacebook className="bg-white text-[#1837C2] rounded-md" size={24} />
        </Link>
        <Link href="https://myvictorychurch.org/" target="_blank">
          <FaYoutube className="bg-white text-[#1837C2] rounded-md" size={24} />
        </Link>
        <Link href="https://myvictorychurch.org/" target="_blank">
          <FaGlobe className="bg-white text-[#1837C2] rounded-md" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Connect;
