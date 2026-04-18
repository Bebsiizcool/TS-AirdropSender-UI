"use client"
import HomeContent from "@/components/homecontent"
import VantaBackground from "@/components/ventrabackgrounds"
import {useAccount} from "wagmi"
export default function Home() {
  const {isConnected} = useAccount()
 return (
  <div>
    <VantaBackground />

    {isConnected ? (
  <div>
    <HomeContent />
  </div>
) : (
  <div className="relative">
    {/* Blurred background content */}
    <div className="blur-sm pointer-events-none select-none opacity-50">
      <HomeContent />
    </div>

    {/* Overlay covering FULL page including header */}
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[9999] backdrop-blur-md bg-black/40">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-8 flex flex-col items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <h1 className="text-white text-2xl font-bold tracking-wide">Connect Your Wallet</h1>
        <p className="text-gray-400 text-sm">Use the connect button in the header to get started</p>
      </div>
    </div>
  </div>
)}
  </div>
 );
}
