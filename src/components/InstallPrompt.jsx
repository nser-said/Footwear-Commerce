"use client"

import { useEffect, useState } from "react"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      // Prevent Chrome's mini-infobar from appearing on mobile
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const onInstallClick = async () => {
    if (!deferredPrompt) return
    try {
      deferredPrompt.prompt()
      const choiceResult = await deferredPrompt.userChoice
      // choiceResult.outcome is 'accepted' or 'dismissed'
      setVisible(false)
      setDeferredPrompt(null)
      // You can send analytics here if needed
      // console.log('Install choice', choiceResult)
    } catch (err) {
      // console.warn('install failed', err)
    }
  }

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      <button
        onClick={onInstallClick}
        style={{
          background: '#0d9488',
          color: '#fff',
          border: 'none',
          padding: '10px 14px',
          borderRadius: 8,
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        }}
      >
        Install App
      </button>
    </div>
  )
}
