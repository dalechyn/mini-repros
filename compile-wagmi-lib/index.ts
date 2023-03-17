import Counter from "./contracts/out/Counter.sol/Counter.json"
import { Address, useContract, useContractRead, useContractWrite } from "wagmi"

export const useCounter = ({ address }: { address: Address }) => {
  return useContract({
    address,
    abi: Counter.abi,
  })
}

export const useCounterNumberRead = ({ address }: { address: Address }) => {
  return useContractRead({
    abi: Counter.abi,
    address,
    functionName: 'number',
  })
}

export const useCounterIncrementWrite =
  (
    config:Parameters<typeof useContractWrite>[0]
  ) => {
  return useContractWrite({
    abi: Counter.abi,
    mode: 'prepared',
    functionName: 'increment',
    ...config
  })
}