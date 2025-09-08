import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalu | Personal Portfolio",
  description: "Dalu Okonkwo is a Software Developer Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-78LQ9J6CPS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-78LQ9J6CPS');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} pt-28 smpt:36 bg-black text-gray-100`}
      >
        <ActiveSectionContextProvider>
          <Header></Header>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
