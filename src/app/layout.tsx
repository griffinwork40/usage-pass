import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SignupModalProvider } from "@/components/signup-modal-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UsagePass — Flat-rate AI inference",
  description:
    "Use leading AI models through one OpenAI-compatible API for one predictable monthly price.",
  openGraph: {
    title: "UsagePass — Flat-rate AI inference",
    description:
      "Use leading AI models through one OpenAI-compatible API for one predictable monthly price.",
    url: "https://usagepass.com",
    siteName: "UsagePass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UsagePass — Flat-rate AI inference",
    description:
      "Use leading AI models through one OpenAI-compatible API for one predictable monthly price.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col">
        <SignupModalProvider>{children}</SignupModalProvider>
      </body>
    </html>
  );
}
