'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { State, WagmiProvider } from 'wagmi'

import { config } from '@/wagmi'

type Props = {
  children: ReactNode,
  initialState: State, 
}
export function Providers({ children, initialState }: Props) {  
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config} initialState={initialState}> 
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
