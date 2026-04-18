"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function VantaBackground() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.globe.min").then((GLOBE) => {
        setVantaEffect(
          GLOBE.default({
            el: vantaRef.current,
            THREE,
            color: 0xff3f81,          // teal lines & dots
            color2: 0xffffff,         // secondary color
            backgroundColor: 0x23153c, // dark bg
            size: 1.2,
            mouseControls: true,
            touchControls: true,
          })
        )
      })
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      style={{ opacity: 0.5 }}
    />
  )
}