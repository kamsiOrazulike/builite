import "../globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Builite Services",
  description: "Project phase I",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
