import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Mateusz Klos portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-[3.4rem] scroll-smooth">
      <body
        className={`${inter.className} m-0 box-border overflow-x-hidden bg-cyan-950 p-0 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
