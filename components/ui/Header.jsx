import React from "react";

import { ImHome } from "react-icons/im";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";

const Header = () => {
  const navMenu = [
    {
      name: "Home",
      url: "/",
      icon: (
        <ImHome
          className="text-gray-200" // Renkleri ayarlamak için
        />
      ),
    },
    {
      name: "Services",
      url: "/services",
      icon: <MdMiscellaneousServices className="text-gray-200" />,
    },

    {
      name: "Contact",
      url: "#contact",
      icon: <IoIosMail className="text-gray-200" />,
    },
  ];

  return (
    <>
      <header className=" fixed  w-full  h-16 sm:h-18 flex items-center justify-between px-4 sm:px-5  top-2 left-0 right-0 z-50 bg-gray-900/10 bg-opacity-90 backdrop-blur-md">
        {/* Logo - Mobilde daha küçük ve ortalanmış */}
        <div className="h-12 sm:h-16 w-auto">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/ZENITH-LOGO-3.svg"
              width={120}
              height={110}
              alt="Zenith Web Solutions Logo"
              className="h-full object-contain"
              priority // Next.js için önemli içeriklerde kullanın
            />
          </Link>
        </div>

        {/* Contact Button - Mobilde daha küçük ve sağda */}
        <div className="text-white text-lg  sm:text-xl font-medium sm:font-semibold"></div>
        <nav className="">
          <FloatingDock
            iconSize={26}
            desktopClassName={
              "hidden md:flex md:flex-row md:items-center md:gap-4 md:justify-between md:px-4 md:py-2"
            }
            mobileClassName={
              "flex md:hidden flex-col items-center gap-2 px-2 py-1"
            }
            items={navMenu.map((item) => ({
              title: item.name,
              href: item.url,
              icon: item.icon,
            }))}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
