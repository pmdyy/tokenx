import { Connector } from '@web3-react/types'
import { ConnectionType, coinbaseWalletConnection, metaMaskConnection, walletConnectConnection } from 'connection'

export function getIsInjected(): boolean {
  return Boolean(window.ethereum)
}

export function getIsMetaMask(): boolean {
  return window.ethereum?.isMetaMask ?? false
}

export function getIsCoinbaseWallet(): boolean {
  return (window as any).ethereum?.isCoinbaseWallet ?? false
}

const CONNECTIONS = [metaMaskConnection, coinbaseWalletConnection, walletConnectConnection]

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = CONNECTIONS.find((connection) => connection.connector === c)
    if (!connection) {
      throw Error('unsupported connector')
    }
    return connection
  } else {
    switch (c) {
      case ConnectionType.METAMASK:
        return metaMaskConnection
      case ConnectionType.COINBASE_WALLET:
        return coinbaseWalletConnection
      case ConnectionType.WALLET_CONNECT:
        return walletConnectConnection
    }
  }
}

export function getConnectionName(connectionType: ConnectionType) {
  switch (connectionType) {
    case ConnectionType.METAMASK:
      return 'Metamask'
    case ConnectionType.COINBASE_WALLET:
      return 'Coinbase Wallet'
    case ConnectionType.WALLET_CONNECT:
      return 'WalletConnect'
  }
}
