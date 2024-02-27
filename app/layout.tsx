import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";
import { SparklesPreview } from "@/components/Welcome";
import { SocialMeadia } from "@/components/SocialMeadia";
import { Projects } from "@/components/Projects";
import { Subscribe } from "@/components/Subscribe";
import { WorkExperince } from "@/components/WorkExperince";
import { Sub } from "@/components/Sub";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <NavBar />
        </ThemeProvider></body>
        <SparklesPreview />
        <SocialMeadia />
        <Projects />
        <WorkExperince />
        {/* <Subscribe /> */}
        <Sub />
    </html>
  );
}
