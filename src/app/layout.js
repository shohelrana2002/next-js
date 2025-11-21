import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "daisyui/components/footer";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="min-h-[calc(100vh-60px)] place-content-center place-items-center">
          {children}
        </main>
        <div>
          <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                Md. Shohel Rana
              </p>
            </aside>
          </footer>
        </div>
      </body>
    </html>
  );
}
