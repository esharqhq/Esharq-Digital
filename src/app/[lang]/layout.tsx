import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { getDictionary } from "@/lib/getDictionary";
import type { Language } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "Esharq Digital.",
  description:
    "We build the digital systems that help brands grow faster, look better, and work smarter — without the usual headaches.",
  keywords: [
    "AI",
    "IT Agency",
    "Web Development",
    "Digital Solutions",
    "Tashkent",
  ],
  icons: {
    icon: [
      { url: "/svg/favicon.ico" },
      { url: "/svg/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/svg/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/svg/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/svg/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Language);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head></head>
      <body suppressHydrationWarning>
        <Preloader />
        <SmoothScrollProvider>
          <Navbar dict={dict.nav} lang={lang} />
          {children}
          <Footer dict={dict.footer} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
