import styled from 'styled-components'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div>
      {address ? (
        <h4>Connected with {address}</h4>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  )
}
