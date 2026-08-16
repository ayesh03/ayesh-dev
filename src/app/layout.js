import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ayeshbhuyan.vercel.app"),

  title: {
    default:
      "Ayesh Ranjan Bhuyan | Software Engineer, Full-Stack & GenAI Developer",
    template: "%s | Ayesh Ranjan Bhuyan",
  },

  description:
    "Portfolio of Ayesh Ranjan Bhuyan — Software Engineer with 2.6+ years of experience in Full-Stack Development, Backend Engineering, and Generative AI application development.",

  keywords: [
    "Ayesh Ranjan Bhuyan",
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "GenAI Developer",
    "Generative AI Developer",
    "AI Developer",
    "AI Full Stack Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Python",
    "Node.js",
    "React",
    "Angular",
    "Next.js",
    "Django",
    "MongoDB",
    "SQL Server",
    "REST API",
  ],

  authors: [
    {
      name: "Ayesh Ranjan Bhuyan",
    },
  ],

  creator: "Ayesh Ranjan Bhuyan",

  alternates: {
    canonical: "https://ayeshbhuyan.vercel.app",
  },

  category: "technology",

  openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://ayeshbhuyan.vercel.app",
  siteName: "Ayesh Ranjan Bhuyan Portfolio",
  title:
    "Ayesh Ranjan Bhuyan | Software Engineer, Full-Stack & GenAI Developer",
  description:
    "Software Engineer with 2.6+ years of experience building modern web applications, backend systems, and Generative AI applications.",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ayesh Ranjan Bhuyan — Software Engineer, Full-Stack & GenAI Developer",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title:
    "Ayesh Ranjan Bhuyan | Software Engineer, Full-Stack & GenAI Developer",
  description:
    "Software Engineer focused on Full-Stack Development, Backend Engineering, and Generative AI applications.",
  images: ["/og-image.png"],
},

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}