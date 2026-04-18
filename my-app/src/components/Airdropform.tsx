"use client"
import InputField from "./ui/InputField"
import { useState, useMemo } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useChainId, useConfig, useAccount, useWriteContract } from 'wagmi'
import { readContract, waitForTransactionReceipt } from '@wagmi/core'
import { calculateTotal } from "./utils/calculateTotal";


export default function AirDropform() {
  const [tokenaddress, settokkenaddress] = useState("");
  const [Recipients, setrecipients] = useState("")
  const [Amount, setamount] = useState("")
  const chainId = useChainId()
  const config = useConfig()
  const account = useAccount()
  const total: number = useMemo(() => calculateTotal(Amount), [Amount]);
  const { data: hash, isPending, writeContractAsync } = useWriteContract()

  async function getapproved(tsenderAddress: string): Promise<number> {
    if (!tsenderAddress) {
      alert("No address found, please use a supported chain")
      return 0
    }

    const response = await readContract(config, {
      abi: erc20Abi,
      address: tokenaddress as `0x${string}`,
      functionName: "allowance",
      args: [account.address, tsenderAddress as `0x${string}`],

    })

    return response as number
  }

  async function handlesubmit() {
    const tsenderAddress = chainsToTSender[chainId]["tsender"]
    const approvedamount = await getapproved(tsenderAddress)
    if (approvedamount < total) {
      const approvalHash = await writeContractAsync({
        abi: erc20Abi,
        address: tokenaddress as `0x${string}`,
        functionName: "approve",
        args: [tsenderAddress as `0x${string}`, BigInt(total)],
      })

      const approvalRecipt = await waitForTransactionReceipt(config, {
        hash: approvalHash
      })
      console.log("Approval confirmed", approvalRecipt)
      await writeContractAsync({
        abi: tsenderAbi,
        address: tokenaddress as `0x${string}`,
        functionName: "airdropERC20",
        args: [
          tokenaddress,
          Recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
          Amount.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
          BigInt(total),
        ]
      })


    }
    else {
      await writeContractAsync({
        abi: tsenderAbi,
        address: tokenaddress as `0x${string}`,
        functionName: "airdropERC20",
        args: [
          tokenaddress,
          Recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
          Amount.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
          BigInt(total),
        ]
      })
    }
  }

  return (

    <div className="flex flex-col items-center justify-content min-h-screen mt-20">
    <div className="p-6 space-y-4 w-7xl bg-black bg-opacity-20 rounded-xl backdrop-blur-sm border border-gray  bg-white/5
  backdrop-blur-md
  border border-white/10
  rounded-2xl
  p-6 flex justify-center items-center flex-col ">

      <InputField
        label="Tokenaddress"
        placeholder="0x..."
        value={tokenaddress}
        onChange={(e) => settokkenaddress(e.target.value)}
      />

      <InputField
        label="Recipients"
        placeholder="0x1234,0x1246..."
        value={Recipients}
        onChange={(e) => setrecipients(e.target.value)}
        large={true}
      />

      <InputField
        label="Amount"
        placeholder="100, 200, 300...."
        value={Amount}
        onChange={(e) => setamount(e.target.value)}
        large={true}
      />

      <button
  onClick={handlesubmit}
  className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-200 focus:outline-none w-6xl flex items-center justify-center"
  style={{ backgroundColor: '#cc5d9a' }}
  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b34882')}
  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#70204c')}
>
  Send Tokens
</button>
    </div>
    </div>
  );
}

