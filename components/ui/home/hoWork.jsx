import { FcPositiveDynamic } from "react-icons/fc";
import React from "react";
import { FcIdea } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

const How = () => {
  const ListService = [
    {
      icons: <FcIdea className="size-16 mb-2 pb-2  " />,
      name: "Share Your Idea.",
      description:
        "Tell us about your ideal website, and we'll create the perfect solution for you.",
      parag: (
        <>
          We listen to all your I wish my website could...
          <br /> ideas Share examples of sites you like for inspiration.
          <br /> No idea? No problem! We'll provide expert recommendations.
        </>
      ),
    },
    {
      icons: <FcPositiveDynamic className="size-16 mb-2 pb-2 " />,
      name: "Choose Your Perfect Plan",
      description: "Flexible solutions tailored to your needs.",
      parag: (
        <>
          Basic Package: Sleek and quick brochure website.
          <br /> Professional Package: Custom design with 5 revision rounds.
          <br /> Premium Package: Unlimited revisions with priority support.
        </>
      ),
    },
    {
      icons: <FcServices className="size-16 mb-2 pb-2 " />,
      name: " We Design, You Approve, We Launch!",
      description: "Quick start: We begin working on your project immediately.",
      parag: (
        <>
          Revisions: Make changes according to your selected package.
          <br /> Until you're 100% satisfied: We keep refining until it's
          perfect.
          <br /> Delivery: We never rush - quality comes first.
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full h-screen ">
      <div className="absolute container mx-auto   grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
        <div className="flex flex-col items-center md:items-start gap-2 ">
          <h2 className="text-4xl font-bold mb-2 text-amber-100">
            How It Works
          </h2>
          <span className="text-lg font-bold text-gray-500">
            Your Dream Website in 3 Easy Steps!
          </span>
        </div>

        {/* Sağ kısım */}
        <div>
          <div className="flex flex-col gap-4 ">
            {ListService.map((item, index) => (
              <div key={index} className="flex  gap-2 ">
                <span className="mt-2">{item.icons}</span>
                <div>
                  <h3
                    className="text-4xl font-bold text-transparent 
            bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500
            bg-clip-text"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xl mb-2 font-bold text-gray-100">
                    {item.description}
                  </p>
                  <p className="text-lg text-gray-400">{item.parag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
