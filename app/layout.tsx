import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/_components/layout/Header";
import { initTheme } from "@/lib/initTheme";
import "./globals.css";
import Footer from "./_components/layout/Footer";
import Separator from "./_components/common/Separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shehroze Talat",
  description:
    "Shehroze Talat is a Full-Stack Software Engineer based in Germany. This is his personal website featuring his work experience, bio and tech blogs around web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `(${initTheme.toString()})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen min-w-full`}
      >
        <div className="px-10 py-20 max-w-screen-sm mx-auto">
          <Header />
          <Separator className="mt-5 mb-8" />
          {children}
          <Separator className="mt-8 mb-5" />
          <Footer />
        </div>
      </body>
    </html>
  );
}