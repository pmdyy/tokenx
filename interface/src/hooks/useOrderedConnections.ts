import { ConnectionType } from 'connection'
import { getConnection } from 'connection/utils'
import { useMemo } from 'react'
import { useAppSelector } from 'state/hooks'

export default function useOrderedConnections() {
  const selectedWallet = useAppSelector((state) => state.user.selectedWallet)
  return useMemo(() => {
    const orderedConnectionTypes: ConnectionType[] = []

    // Always attempt to use to Gnosis Safe first, as we can't know if we're in a SafeContext.
    orderedConnectionTypes.push(ConnectionType.METAMASK)
    orderedConnectionTypes.push(ConnectionType.WALLET_CONNECT)

    // // Add the `selectedWallet` to the top so it's prioritized, then add the other selectable wallets.
    // if (selectedWallet) {
    //   orderedConnectionTypes.push(selectedWallet)
    // }

    return orderedConnectionTypes.map(getConnection)
  }, [selectedWallet])
}
