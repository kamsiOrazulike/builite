import "./globals.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Builite",
  description: "Project phase I",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
