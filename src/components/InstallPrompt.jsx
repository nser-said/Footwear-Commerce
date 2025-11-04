"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("✅ beforeinstallprompt event fired");
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    setDeferredPrompt(null);
  };

  return (
    deferredPrompt && (
      <button
        onClick={handleInstallClick}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "10px 20px",
          background: "#0d9488",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        📲 تثبيت التطبيق
      </button>
    )
  );
}
