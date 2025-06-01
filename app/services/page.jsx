import React from "react";

import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import Contact from "@/components/ui/contact-ui/contact";

const Services = () => {
  const CartService = [
    {
      name: "Web Development",
      description:
        "  Tailored, Scalable, and High-Performance Websites for Your Business. We craft custom-built, responsive websites using cutting-edge technologies like React, Next.js, and Node.js to ensure your site is fast, secure, and future-proof. Whether you need a business website, e-commerce platform, or SaaS application, our development team delivers pixel-perfect, mobile-friendly solutions tailored to your goals.From initial concept to deployment, we prioritize clean code, seamless integrations, and scalable architecture to support your growing business. ",
      imageUrl: "/web-development.jpg",
    },

    {
      name: "Maintenance & Support Services",
      description:
        " Proactive Care for Hassle-Free Web Operations.Keep your website running at peak performance with our 24/7 maintenance and technical support services.We handle security patches, bug fixes, plugin updates, and server monitoring so you can focus on your business. Our team ensures 99.9% uptime, regular backups, and performance audits to prevent downtime and security risks. Let us be your long-term tech partner for seamless digital operations.",
      imageUrl: "/Maintenance-Support Services.jpg",
    },

    {
      name: "UI/UX Design",
      description:
        "Intuitive, Engaging Interfaces That Drive User Satisfaction & Conversions.A well-designed interface is key to retaining visitors and boosting engagement. Our user-centric UI/UX design combines aesthetics, usability, and psychology to create memorable digital experiences. We conduct user research, wireframing, prototyping, and A/B testing to optimize navigation, accessibility, and conversion paths. From minimalist layouts to interactive elements, we design interfaces that align with your brand and business objectives.",
      imageUrl: "/web-design.jpg",
    },

    {
      name: "SEO Services",
      description:
        "Data-Driven Strategies to Dominate Search Rankings & Grow Organic Traffic.Boost your online visibility with our comprehensive SEO services, including keyword research, on-page optimization, technical SEO, and content strategy. We analyze your competitors, fix crawl errors, and optimize metadata to improve rankings on Google, Bing, and other search engines. Our white-hat techniques ensure sustainable growth, higher click-through rates (CTR), and increased lead generation.",
      imageUrl: "/SEO-services.jpg",
    },

    {
      name: "Digital Marketing",
      description:
        "Targeted Campaigns to Expand Your Reach & Maximize ROI.From social media ads and PPC campaigns to email marketing and influencer partnerships, we create data-driven strategies to attract and convert your ideal audience. Our team leverages Google Ads, Meta Ads, LinkedIn, and programmatic advertising to deliver measurable results. We track KPIs, refine audience targeting, and optimize ad spend to maximize your return on investment (ROI).",
      imageUrl: "/digital-Marketing.jpg",
    },
    {
      name: "Performance Optimization",
      description:
        "Lightning-Fast Websites for Better User Experience & Higher Rankings.A slow website drives visitors away and hurts SEO. Our performance optimization services include image compression, code minification, CDN setup, caching strategies, and server-side enhancements. We conduct Lighthouse audits, fix render-blocking resources, and optimize Core Web Vitals (LCP, FID, CLS) to ensure your site loads in under 2 seconds, improving both user satisfaction and search rankings.",
      imageUrl: "/performances.jpg",
    },
  ];

  return (
    <>
      <section className="relative flex  top-10 pt-20  overflow-hidden">
        #
        <div className="   w-full h-full bg-black text-amber-100 pt-20">
          <h2 className="flex flex-row top-20 justify-center text-5xl font-bold   m-auto ">
            <ColourfulText text="OUR SERVICES" />
          </h2>
        </div>
      </section>
      <section className=" relative  w-full  px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 font-bold text-center text-md md:text-2xl max-w-3xl xl:max-w-5xl mx-auto mb-12">
            We offer powerful, creative, and scalable digital solutions tailored
            to elevate your brand&apos;s presence in the online world. From
            custom web design and advanced development to SEO optimization and
            digital strategy, our team helps you build a strong, user-focused
            digital identity. Whether you&apos;re a startup or an established
            business, we deliver results-driven solutions that enhance
            visibility, improve user engagement, and drive measurable growth
            across all digital platforms.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {CartService.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } `}
          >
            {/* Resim Kısmı (Yan Yana Toggle) */}
            <div className="w-full md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={service.imageUrl}
                alt={service.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={90}
                priority={index < 2} // İlk 2 resme öncelik
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>

            {/* Metin Kısmı */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-transparent 
            bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500
            bg-clip-text py-4"
              >
                {service.name}
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-semibold leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Services;
