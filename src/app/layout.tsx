import "./globals.css";

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/colors-hsl";
import "open-props/masks/edges";
import "open-props/masks/corner-cuts";

// component css styles
import styles from "./layout.module.css";

// next
import type { Metadata } from "next";

// components
import Header from "@/components/header";
import Footer from "@/components/Footer";

// assets
import { geistSans, geistMono, font3 } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "ArtCom Szkolenia Informatyczne i Kursy Językowe",
  description: "Od ponad 30 lat specjalizujemy się w szkoleniach informatycznych oraz kursach języków obcych. Prowadzimy egzaminy ECDL, VCC i TELC.",
  authors: [{ name: "Remi" }],
  robots: { index: true, follow: true },
  category: "technology",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${font3.variable} font-geistMono antialiased`}>
        <article className={styles["layout"]}>
          <Header />
          <main>{children}</main>
          <Footer />
        </article>
      </body>
    </html>
  );
}
