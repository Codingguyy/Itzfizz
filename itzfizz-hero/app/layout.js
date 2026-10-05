import { Space_Grotesk } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const title = "Welcome Itzfizz";
const description =
  "A scroll-driven hero section: a car drives across the screen as you scroll. Built with Next.js, Tailwind CSS and GSAP.";

export const metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export const viewport = { themeColor: "#0e1116", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <body>
        <noscript>
          <style>{"[data-hero]{visibility:visible!important}"}</style>
        </noscript>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
