import "./globals.css";

/* the props */
import "open-props/style";

/* optional imports that use the props */
import "open-props/colors-hsl";
import "open-props/masks/edges";
import "open-props/masks/corner-cuts";

// component css styles
import styles from "./layout.module.css";

// react
import { ReactNode } from "react";

// next
import type { Metadata } from "next";

// components
import { UserSettingsStoreProvider } from "@/stores/userSettingsProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

// assets
import { font1, font2, font3, font4 } from "@/assets/fonts";

// types
interface LayoutProps {
  contentModal: ReactNode;
  children: ReactNode;
}

// Disable the whole route cache (avoid prerendered static content because we want to stay in sync with payload cms database changes)
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "ArtCom Szkolenia Informatyczne i Kursy Językowe",
  description: "Od ponad 30 lat specjalizujemy się w szkoleniach informatycznych oraz kursach języków obcych. Prowadzimy egzaminy ECDL, VCC i TELC.",
  authors: [{ name: "Remi" }],
  robots: { index: true, follow: true },
  category: "technology",
};

export default function Layout({ contentModal, children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} font-font-4 antialiased md:font-font-2`}>
        <article className={styles["layout"]}>
          <UserSettingsStoreProvider>
            <Header />
            <main>
              {contentModal}
              {children}
            </main>
            <Footer />
          </UserSettingsStoreProvider>
        </article>
      </body>
    </html>
  );
}
