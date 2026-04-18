"use client"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, darkTheme} from "@rainbow-me/rainbowkit"
import { anvil, sepolia } from "wagmi/chains"
import {type ReactNode} from "react"
import config from "@/rainbowkitconfig"
import {useState} from "react"
import "@rainbow-me/rainbowkit/styles.css"

export function Providers(props: {children: ReactNode}){
    const [queryClient] = useState(() => new QueryClient())
    
    return(
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
            <RainbowKitProvider initialChain={sepolia}>
                
                 {props.children}
                 </RainbowKitProvider>
                 </QueryClientProvider>
            </WagmiProvider>
    )
}