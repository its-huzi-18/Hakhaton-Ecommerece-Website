import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Poppins } from 'next/font/google';
import Header from "./Component/Header";
import { usePathname } from "next/navigation";
import Footer from "./Component/Footer";

const poppins = Poppins({
  subsets: ['latin'], // Add other subsets if needed
  weight: ['400','500', '600', '700'], // Specify font weights
  variable: '--font-poppins', // Custom CSS variable
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated by create next app and Tailwind CSS",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
// const pathname = usePathname()

  // const bgHeader = pathname === '/' ? 'bg-white' : 'bg-secondaryBg';

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header 
        
          // bgHeader={bgHeader}
        
        />
        {children}
        <Footer />
        </body>
    </html>
  );
}