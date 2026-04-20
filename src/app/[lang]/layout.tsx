import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { getDictionary } from "@/lib/getDictionary";
import type { Language } from "@/lib/dictionaries";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://esharq.com"),
  title: {
    default: "Esharq",
    template: "%s | Esharq",
  },
  description:
    "Esharq Digital is an AI-focused IT agency that builds smart digital solutions — web development, mobile apps, AI integration, branding, and cybersecurity for businesses worldwide.",
  keywords: [
    "AI agency",
    "IT agency",
    "web development",
    "mobile app development",
    "AI integration",
    "digital solutions",
    "UI/UX design",
    "branding",
    "cybersecurity",
    "Esharq",
    "Esharq Digital",
  ],
  authors: [{ name: "Esharq Digital", url: "https://esharq.com" }],
  creator: "Esharq Digital",
  publisher: "Esharq Digital",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://esharq.com",
    siteName: "Esharq Digital",
    title: "Esharq Digital — AI-Powered IT Agency",
    description:
      "We build smart digital solutions powered by AI — web development, mobile apps, branding, and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Esharq Digital — AI-Powered IT Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esharq Digital — AI-Powered IT Agency",
    description:
      "AI-focused IT agency building smart digital solutions for businesses worldwide.",
    images: ["/opengraph-image"],
    creator: "@esharqofficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://esharq.com",
    languages: {
      en: "https://esharq.com/en",
      uz: "https://esharq.com/uz",
      ru: "https://esharq.com/ru",
    },
  },
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
        <Analytics />
        <Preloader />
        <SmoothScrollProvider>
          <Navbar navDict={dict.nav} contactDict={dict.contact} lang={lang} />
          {children}
          <Footer dict={dict.footer} navDict={dict.nav} lang={lang} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
