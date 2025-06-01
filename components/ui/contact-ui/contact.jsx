import React from "react";
import ContactForm from "./form";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { WavyBackground } from "@/components/ui/wavy-background";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden 3xl:py-0 3xl:my-0">
      {/* Wavy Background */}
      <div className="absolute inset-0 z-0 3xl:my-0 3xl:py-0">
        <WavyBackground
          colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
          waveWidth={50}
          backgroundFill="black"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
          className="h-full w-full"
        />
      </div>

      {/* Contact Content */}
      <section
        id="contact"
        className="relative z-10 w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 3xl:px-8 flex 3xl:py-0 items-center justify-center min-h-[calc(100vh-80px)]"
      >
        <div className="mx-auto max-w-7xl 3xl:max-w-[1800px] w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 3xl:gap-16 w-full">
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start backdrop-blur-sm bg-black/30 p-6 rounded-lg 3xl:p-8 h-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 lg:mb-10 3xl:text-7xl 3xl:mb-12 text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text">
                Contact
              </h2>

              <div className="space-y-3 sm:space-y-4 3xl:space-y-5 w-full">
                <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg 3xl:text-xl">
                  <BsTelephoneForwardFill className="w-5 h-5 sm:w-6 sm:h-6 mr-3 3xl:w-7 3xl:h-7" />
                  <span>+44 (123) 456-7890</span>
                </div>

                <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg 3xl:text-xl">
                  <IoLogoWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 mr-3 3xl:w-7 3xl:h-7" />
                  <span>+44 (123) 456-7890</span>
                </div>

                <div className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg 3xl:text-xl">
                  <IoIosMail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 3xl:w-7 3xl:h-7" />
                  <span>info@zenith-web.co.uk</span>
                </div>

                <div className="mt-6 sm:mt-8 3xl:mt-10">
                  <p className="text-gray-300 font-bold text-base sm:text-lg md:text-xl 3xl:text-2xl mb-2 3xl:mb-3">
                    Address:
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg 3xl:text-xl">
                    32 Eyre street,
                    <br />
                    Sheffield,
                    <br />
                    S1 4QZ
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-2/3 flex justify-center lg:justify-center h-full">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl 3xl:max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;