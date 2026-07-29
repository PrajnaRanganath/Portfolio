import type { Metadata } from "next";
import { Manrope, Lato } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prajnaranganath.vercel.app"),

  title: {
    default: "Prajna Ranganath",
    template: "%s | Prajna Ranganath",
  },

  description:
    "Prajna Ranganath is an Electronics and Communication Engineering student specializing in Cyber-Physical Systems, with interests and projects in robotics, autonomous systems, robot perception, control, and embedded systems.",

  keywords: [
    "Prajna Ranganath",
    "Robotics",
    "Autonomous Systems",
    "Cyber-Physical Systems",
    "Robot Perception",
    "Motion Planning",
    "Embedded Systems",
    "Control Systems",
    "ROS",
    "ROS2",
    "Robotics Portfolio",
    "Prajna",
    "Ranganath",
    "SASTRA",
    "Cornell",
    "Bengaluru",
  ],

  authors: [
    {
      name: "Prajna Ranganath",
      url: "https://prajnaranganath.vercel.app",
    },
  ],

  creator: "Prajna Ranganath",

  openGraph: {
    type: "website",
    url: "https://prajnaranganath.vercel.app",
    title: "Prajna Ranganath",
    description:
      "Portfolio showcasing projects and research interests in robotics, autonomous systems, perception, control, embedded systems, and cyber-physical systems.",
    siteName: "Prajna Ranganath",
  },

  twitter: {
    card: "summary",
    title: "Prajna Ranganath",
    description:
      "Portfolio showcasing projects and research interests in robotics, autonomous systems, perception, control, embedded systems, and cyber-physical systems.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}