import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Street Photography",
  description:
    "Explore the beauty of street photography through unique and captivating shots.",
  keywords: ["street photography", "art", "photograph"],
  authors: [{ name: "sergiovzambelli", url: "https://sergiovzambelli.it" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
