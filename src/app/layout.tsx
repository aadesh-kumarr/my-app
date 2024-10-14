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
  authors: [{ name: "Aadesh Kumar", url: "https://yourwebsite.com/about" }],
  openGraph: {
    title: "Aadesh Kumar",
    description: "Discover the world of coding and programming excellence.",
    url: "https://yourwebsite.com",
    siteName: "Aadesh Kumar",
    images: [
      {
        url: "https://yourwebsite.com/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Aadesh Kumar - Coding Tutorials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadesh Kumar",
    description: "Welcome to the world of coding.",
    images: ["https://yourwebsite.com/path/to/image.jpg"],
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
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
        <link rel="canonical" href="https://yourwebsite.com" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Aadesh Kumar",
            "url": "https://yourwebsite.com",
            "description": "Welcome to the world of coding. Where we can walk towards brilliance.",
            "sameAs": [
              "https://twitter.com/yourtwitterhandle",
              "https://www.linkedin.com/in/yourlinkedinprofile",
              "https://github.com/yourgithubusername"
            ]
          }
          `}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
