import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import 'react-quill/dist/quill.snow.css';
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cfi-jgec-new.vercel.app"),
  title: {
    default: "CFI - Center For Innovation, JGEC",
    template: "%s | CFI"
  },
  description: "The hub of Ideas ,Innovation and Inspiration.CFI is the technical society of JGEC, serving as a platform for students to apply engineering knowledge to solve real-world problems. It has been promoting technical knowledge of the students since its establishment (2010). Along with conduction of classes, CFI also deals with projects and provides adequate support to carry out the same. In short, CFI is an organization where students come-in together to uplift their technical know-how - for the betterment of themselves and for the society. CFI is not only one of the most active clubs in JGEC but also receives immense support and guidance from the teachers.",
  twitter: {
    title: "CFI - Center For Innovation, JGEC",
    description: "The hub of Ideas ,Innovation and Inspiration.CFI is the technical society of JGEC, serving as a platform for students to apply engineering knowledge to solve real-world problems. It has been promoting technical knowledge of the students since its establishment (2010). Along with conduction of classes, CFI also deals with projects and provides adequate support to carry out the same. In short, CFI is an organization where students come-in together to uplift their technical know-how - for the betterment of themselves and for the society. CFI is not only one of the most active clubs in JGEC but also receives immense support and guidance from the teachers.",
    card: "summary_large_image",
  },
  openGraph: {
    title: "CFI - Center For Innovation, JGEC",
    description: "The hub of Ideas ,Innovation and Inspiration.CFI is the technical society of JGEC, serving as a platform for students to apply engineering knowledge to solve real-world problems. It has been promoting technical knowledge of the students since its establishment (2010). Along with conduction of classes, CFI also deals with projects and provides adequate support to carry out the same. In short, CFI is an organization where students come-in together to uplift their technical know-how - for the betterment of themselves and for the society. CFI is not only one of the most active clubs in JGEC but also receives immense support and guidance from the teachers.",
    url: 'https://cfi-jgec.vercel.app',
    type: "website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
