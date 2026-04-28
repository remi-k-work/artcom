/* eslint-disable @next/next/no-img-element */

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

// other libraries
import { Analytics } from "@vercel/analytics/next";

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
        <Analytics debug={false} />
        <a
          href="https://www.remiforge.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit RemiForge Portfolio (opens in a new tab)"
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
            maxWidth: "36rem",
            width: "100%",
            margin: "2rem auto",
            padding: "1rem",
            textDecoration: "none",
            border: "1px solid #444",
            borderRadius: "0.75rem",
            backgroundColor: "#1a1a1a",
            color: "#e5e5e5",
          }}
        >
          <img
            src="https://www.remiforge.dev/opengraph-image.jpg"
            width="1200"
            height="630"
            alt=""
            loading="lazy"
            style={{
              flex: "none",
              width: "8rem",
              height: "auto",
              aspectRatio: "1200 / 630",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
          <div style={{ flex: "1", minWidth: "14rem" }}>
            <div style={{ color: "#a3a3a3", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
              <span aria-hidden="true">👨‍💻</span> Built By
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              RemiForge
              <span aria-hidden="true" style={{ color: "#888", fontSize: "1.25rem", fontWeight: 400 }}>
                ↗
              </span>
            </div>
            <div style={{ color: "#a3a3a3", fontSize: "0.95rem", marginTop: "0.25rem" }}>Portfolio of Projects, Experiments & Contact</div>
          </div>
        </a>
      </body>
    </html>
  );
}
