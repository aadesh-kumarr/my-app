import type { Metadata } from "next";
import SideBar from "./components/main/sidebar";
import Resume from "./components/main/resume";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";

import "./globals.css";

// Define metadata with optimized keywords and added Twitter metadata for better SEO and social sharing
export const metadata: Metadata = {
  title: "Aadesh Kumar - Web Developer & Programmer",
  description:
    "Explore the portfolio of Aadesh Kumar, a skilled web developer specializing in Next.js, Python, and scalable web applications.",
  keywords:
    "Aadesh Kumar, decoded person , web developer, programmer, Next.js, JavaScript, Python, coding tutorials, portfolio, React developer, scalable applications",
  authors: [
    { name: "Aadesh Kumar", url: "https://aadesh-portfolio-ivory.vercel.app/" },
  ],
  openGraph: {
    title: "Aadesh Kumar - Web Developer & Programmer",
    description:
      "Discover the world of coding and programming excellence with Aadesh Kumar's portfolio, showcasing projects and skills in web development.",
    url: "https://aadesh-portfolio-ivory.vercel.app/",
    siteName: "Aadesh Kumar's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portrait.png", // Relative path to the image in the public folder
        width: 1200,
        height: 630,
        alt: "Aadesh Kumar Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aadeshkumar",
    title: "Aadesh Kumar - Web Developer & Programmer",
    description:
      "Portfolio showcasing projects, skills, and expertise in web development.",
    images: "/portrait.png", // Relative path for Twitter preview
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO-friendly font preloading */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://aadesh-portfolio-ivory.vercel.app/"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased no-scrollbar">
      <div className="fixed top-0 left-0  right-0 z-40">
        <SideBar />
        <Resume />
        <Navbar />
      </div>{children}
      <div className="">
       <Footer/>
       </div>
        </body>
   
    </html>
  );
}
