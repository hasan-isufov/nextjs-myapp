import Footer from "@/components/ui/footer";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import { Particles } from "@/components/magicui/particles";
import Script from "next/script";

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
  authors: [
    {
      name: "Zenith Web",
      url: "https://www.zenithweb.com",
    },
  ],
  icons: {
    icon: "/next-logo-title.png",

    shortcut: "/next-logo-title.png",
  },
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

        <Toaster richColors position="top-right" />
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZWH922GJY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LZWH922GJY');
          `}
        </Script>
      </body>
    </html>
  );
}
