import { Roboto } from "next/font/google";
import { Button } from "@/components/ui/moving-border";
import Spline from "@splinetool/react-spline/next";
import { InfiniteMovingCardsDemo } from "@/components/ui/movingCard";
import ColourfulText from "@/components/ui/colourful-text";
import How from "@/components/ui/home/hoWork";
import Link from "next/link";
import Contact from "@/components/ui/contact-ui/contact";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`${roboto.className} overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative h-[40rem] md:h-screen w-full">
        <div className="absolute h-[25rem] w-[25rem] md:h-screen md:w-full mx-auto inset-0 overflow-hidden">
          <Spline
            scene="https://prod.spline.design/j86JKeJ4bkA6Rh1o/scene.splinecode"
            loading="lazy"
          />
        </div>

        <div className="absolute top-[29rem] sm:top-[40rem] 3xl:top-[62rem]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 " >
          <h1
            className="text-5xl md:text-7xl font-bold text-center text-transparent 
            bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500
            bg-clip-text py-4" 
          >
            Zenith Web App Design & Development
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="w-full px-4 md:px-8  md:py-20 bg-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-gray-300 text-lg md:text-2xl">
            Boost your online presence with custom web app development and
            cutting-edge UX/UI design. Zenith delivers high-performance,
            scalable web applications tailored for startups and enterprises.
            Fast, secure, and SEO-optimized – transform your vision into a
            seamless digital experience.
          </h3>

          <div className="mt-10">
            <Button className="hover:text-violet-600 hover:font-bold transition-all duration-200 cursor-pointer">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl text-center md:text-6xl font-bold text-gray-300 mb-6">
            <ColourfulText text="OUR SERVICES" />
          </h2>

          <p className="text-gray-300 text-center text-md md:text-xl max-w-3xl xl:max-w-5xl mx-auto mb-12">
            We offer powerful, creative, and scalable digital solutions tailored
            to elevate your brand&apos;s presence in the online world. From
            custom web design and advanced development to SEO optimization and
            digital strategy, our team helps you build a strong, user-focused
            digital identity. Whether you&apos;re a startup or an established
            business, we deliver results-driven solutions that enhance
            visibility, improve user engagement, and drive measurable growth
            across all digital platforms.
          </p>

          <div className="w-full overflow-hidden px-4">
            <InfiniteMovingCardsDemo />
          </div>
        </div>
      </section>
      <section className="3xl:mx-[45rem] 3xl:my-0 3xl:py-0  ">
        <How />
      </section>
      <div className=" 3xl:flex 3xl:flex-row 3xl:my-0 3xl:py-0 ">
        <Contact className=" 3xl:my-0 3xl:py-0 3xl:top-0 " />
      </div>
    </main>
  );
}
