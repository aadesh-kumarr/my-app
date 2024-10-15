import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aadesh Kumar",
  description: "Welcome to the world of coding. Where we can walk towards brilliance.",
  keywords: "Aadesh kumar,coding, programming, web development, Next.js, JavaScript, Python, tutorials",
  authors: [{ name: "Aadesh Kumar", url: "https://aadesh-portfolio-ivory.vercel.app/ " }],
  openGraph: {
    title: "Aadesh Kumar",
    description: "Discover the world of coding and programming excellence.",
    url: "https://aadesh-portfolio-ivory.vercel.app/ ",
    siteName: "Aadesh Kumar",
    locale: "en_US",
    type: "website",
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

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
