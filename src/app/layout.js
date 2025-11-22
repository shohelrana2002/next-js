import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const ralway = Raleway({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning to nextJS",
    template: "%s | Learning to nextJS",
  },
  keywords: ["Next.js", "React", "JavaScript"],
  description: "NextJS Cooking Now !!",
};
// ${ralway.className}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          <main className="min-h-[calc(100vh-60px)] place-content-center place-items-center">
            {children}
          </main>
          <Footer />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
