import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-600/50 border-t-2 border-white/20 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Zenith. All rights reserved.
        </p>
        <p className="text-xs md:text-sm mt-2">Built with ❤️ using Next.js</p>
      </div>
    </div>
  );
};

export default Footer;
