import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/MarqueeText";


export const HindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${HindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee/>
        {children}
      </body>
    </html>
  );
}
