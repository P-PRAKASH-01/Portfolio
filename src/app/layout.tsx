import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalBackground } from "@/components/GlobalBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://prakash--portfolio.vercel.app"),
  title: "Prakash | Creative Developer & AIML Student",
  description:
    "Portfolio of Prakash - CSE (AIML) Student specializing in Web Development, ML models, and interactive web tools.",
  openGraph: {
    title: "Prakash | Creative Developer & AIML Student",
    description:
      "Portfolio of Prakash - CSE (AIML) Student specializing in Web Development, ML models, and interactive web tools.",
    images: [{ url: "/Profile.jpeg" }],
    type: "website",
  },
  icons: {
    icon: "/Profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-[#090A10] text-[#FFFFFF] antialiased selection:bg-[#FF7018] selection:text-white min-h-screen relative"
      >
        <ThemeProvider>
          <GlobalBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
