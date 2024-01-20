'use client'
import { useSuspenseQuery } from "@tanstack/react-query"
import { useAccount, useConfig, useSignMessage } from "wagmi"
import { getBalanceQueryOptions } from "wagmi/query"
import { formatUnits } from 'viem'
import { Suspense } from "react"

function SuspenseHydrationIssueSkeleton() {
  return <>Loading...</>
}

function SignCoolMessageButton() {
  const {signMessage,data} = useSignMessage()
  return <button type="button" disabled={!!data} onClick={() => {signMessage({message: 'cool'}); fetch('/revalidate')}}>Sign cool message ({data})</button>
}

function SuspenseHydrationIssueToSuspend() {
  const config = useConfig()
  const {address, isConnecting, isReconnecting} = useAccount()
  const {data} = useSuspenseQuery(getBalanceQueryOptions(config, {address, chainId: 1}))

  if (isConnecting) return <>Connecting...</>
  if (isReconnecting) return <>Reconnecting...</>

  return <>
    {formatUnits(data.value, data.decimals)} {data.symbol}
    <SignCoolMessageButton/>
  </>
}

export function SuspenseHydrationIssue() {
return <Suspense fallback={<SuspenseHydrationIssueSkeleton/>}><SuspenseHydrationIssueToSuspend/></Suspense>
}
