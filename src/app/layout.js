import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimus Prime",
  description: "Leader of the Cybertron",
};

const monument_normal = localFont({
  src: "../../public/fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument_normal",
});
const monument_bold = localFont({
  src: "../../public/fonts/MonumentExtended-Ultrabold.otf",
  variable: "--font-monument_bold",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monument_normal.variable} ${monument_bold.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
