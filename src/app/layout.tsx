import type { Metadata } from "next";
import { National_Park, Architects_Daughter } from "next/font/google";
import "./globals.css";

const nationalPark = National_Park({
  subsets: ["latin"],
  variable: "--font-national-park",
  weight: ["400", "500", "700", "800"],
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "The Denver Guide",
  description:
    "A field companion to restaurants, bars, attractions, and hidden gems in the Denver metro area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nationalPark.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
