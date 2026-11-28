"use client"

import { useEffect, useState } from "react"
import Talk, { type PresenterNotes } from "./Talk"
import { locked } from "./presenter-notes.enc"

const bytes = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0))

/** The online copy of Kate's view: the links open only with the key in the link after "#". Without it, it's the shared view. */
export default function UnlockedTalk() {
  const [notes, setNotes] = useState<PresenterNotes>()
  useEffect(() => {
    const k = location.hash.slice(1)
    if (!k) return
    crypto.subtle
      .importKey("raw", bytes(k), "AES-GCM", false, ["decrypt"])
      .then((key) => crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(locked.iv) }, key, bytes(locked.data)))
      .then((d) => setNotes(JSON.parse(new TextDecoder().decode(d))))
      .catch(() => {})
  }, [])
  return <Talk notes={notes} />
}
