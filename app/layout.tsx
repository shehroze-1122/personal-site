import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Separator from "@/components/common/Separator";
import { initTheme } from "@/lib/initTheme";
import config from "@/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = {
  default: "Shehroze Talat",
  template: "%s | Shehroze",
};

const description =
  "Shehroze Talat is a Full-Stack Software Engineer based in Germany. This is his personal website featuring his work experience, bio and tech blogs around web.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(config.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: config.baseUrl,
    siteName: "Shehroze Talat",
    images: ["/opengraph-default.png"],
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    site: "@shehrozett",
    creator: "@shehrozett",
    images: ["/opengraph-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {/* Add the following meta tag for Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="KDh9V0skxx9G1Gssnz3LdNeUEhjhUn9qgxQik5-0sBk"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen min-w-full`}
      >
        <div className="px-5 py-10 max-w-2xl mx-auto">
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
