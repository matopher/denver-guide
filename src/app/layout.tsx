import type { Metadata } from "next";
import { National_Park, Inter } from "next/font/google";
import "./globals.css";

const nationalPark = National_Park({
  subsets: ["latin"],
  variable: "--font-national-park",
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hey, Denver!",
  description:
    "A field companion to restaurants, bars, attractions, and hidden gems in the Denver metro area.",
  openGraph: {
    title: "Hey, Denver!",
    description:
      "A field companion to eat, drink & wander in the Denver metro area.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey, Denver!",
    description:
      "A field companion to eat, drink & wander in the Denver metro area.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nationalPark.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
