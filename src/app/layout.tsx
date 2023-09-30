import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const font = Noto_Sans({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Mateusz Kłos portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} m-0 box-border overflow-x-hidden bg-cyan-950 p-0 text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
