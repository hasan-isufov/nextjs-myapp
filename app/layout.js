import Footer from "@/components/ui/footer";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import { Particles } from "@/components/magicui/particles";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Zenith Web ",
  keywords:
    "Web Development, UI/UX Design, SEO, Digital Marketing, Performance Optimization, Maintenance & Support",

  description:
    "Zenith Web is your one-stop solution for all web development needs, offering services in UI/UX design, SEO, digital marketing, and performance optimization. Our expert team ensures your website is fast, secure, and user-friendly, helping you achieve your business goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body className="bg-black">
        <Particles
          className="fixed top-0 left-0 w-full h-full z-[-1]"
          quantity={100}
          staticity={50}
          ease={50}
          size={0.4}
          refresh={false}
          color="#ffffff"
          vx={0}
          vy={0}
        />
        <Header />
        {children}
        <GoogleAnalytics gaMeasurementId={process.env.GA_MANAGEMENT_ID} />
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
