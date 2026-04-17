"use client"
import HomeContent from "@/components/homecontent"
import {useAccount} from "wagmi"
export default function Home() {
  const {isConnected} = useAccount()
 return (
  <div>
    {isConnected ?(
      <div>
        <HomeContent/>
      </div>
    ): (
      <div>
        <h1> please connect a wallet to view the content </h1>
        </div>
    )}
  </div>
 );
}
