'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Share = () => {
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="flex flex-col gap-1 sm:items-center">
        <span className="font-semibold text-white">Share with your community</span>
        <div className="flex gap-3">
          {/* WhatsApp */}
          <Link
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              title
            )} ${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="bg-white text-blue-500 rounded-md" size={30} />
          </Link>
  
          {/* Twitter */}
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              title
            )}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="bg-white text-blue-500 rounded-md" size={30} />
          </Link>
  
          {/* Facebook */}
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="bg-white text-blue-500 rounded-md" size={24} />
          </Link>
  
          {/* Copy Link */}
          <button onClick={copyLink}>
            {copied ? "Link Copied!" : <FaLink className="bg-white text-blue-500 rounded-md" size={30}/>}
          </button>
        </div>
      </div>
    );
  
};

export default Share;
