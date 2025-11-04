"use client"; // 👈 ضروري لأننا بنستخدم useEffect في ملف layout
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import SwRegister from "../components/SwRegister";
import InstallPrompt from "../components/InstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  // ✅ تسجيل Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("✅ Service Worker Registered"))
        .catch((err) =>
          console.error("❌ Service Worker Registration Failed:", err)
        );
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ✅ روابط وأوسمة PWA الأساسية */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {/* ✅ مكونات PWA */}
          <SwRegister />
          <InstallPrompt />

          {/* ✅ باقي الموقع */}
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
