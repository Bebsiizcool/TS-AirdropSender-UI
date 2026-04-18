"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"

export default function Header() {
  return (
    <div className="w-full px-65 pt-4 z-[99999] relative mt-6" style={{ background: 'transparent' }}>
      <div
        className="flex items-center justify-between px-6 py-3 rounded-xl"
        style={{ background: '#70204c' }}
      >

        {/* Logo */}
        <Image
          src="/final3.png"
          alt="Sender Logo"
          width={230}
          height={10}
          className="object-contain"
        />

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-white-400 text-xs font-semibold tracking-widest uppercase hover:text-gray-400 transition-colors">
            Community
          </a>
          <a href="#" className="text-white-400 text-xs font-semibold tracking-widest uppercase hover:text-gray-400 transition-colors">
            Ecosystem
          </a>
          <div className="flex items-center gap-1 text-white-400 text-xs font-semibold tracking-widest uppercase cursor-pointer hover:text-gray-400 transition-colors">
            Developers <span className="text-xs">▾</span>
          </div>
          <div className="flex items-center gap-1 text-white-400 text-xs font-semibold tracking-widest uppercase cursor-pointer hover:text-gray-400 transition-colors">
            Learn <span className="text-xs">▾</span>
          </div>
        </nav>

        {/* Connect Button */}
        <div className="connect-btn-wrapper">
          <ConnectButton />
        </div>

      </div>
    </div>
  )
}