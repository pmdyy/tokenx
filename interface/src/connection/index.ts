import { Connector } from '@web3-react/types'
import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { WalletConnect } from '@web3-react/walletconnect'

export enum ConnectionType {
  METAMASK = 'METAMASK',
  COINBASE_WALLET = 'COINBASE_WALLET',
  WALLET_CONNECT = 'WALLET_CONNECT',
  // NETWORK = 'NETWORK',
  // GNOSIS_SAFE = 'GNOSIS_SAFE',
}

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}

const [web3MetaMask, web3MetaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }))
export const metaMaskConnection = {
  connector: web3MetaMask,
  hooks: web3MetaMaskHooks,
  type: ConnectionType.METAMASK,
}

const [web3CoinbaseWallet, web3CoinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: 'https://mainnet.infura.io/v3/503ec68813ad41f98eb236eb86ee4d32',
        appName: 'web3-react',
      },
    })
)
export const coinbaseWalletConnection = {
  connector: web3CoinbaseWallet,
  hooks: web3CoinbaseWalletHooks,
  type: ConnectionType.COINBASE_WALLET,
}

const [web3WalletConnect, web3WalletConnectHooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: ['https://mainnet.infura.io/v3/503ec68813ad41f98eb236eb86ee4d32'],
      },
    })
)
export const walletConnectConnection = {
  connector: web3WalletConnect,
  hooks: web3WalletConnectHooks,
  type: ConnectionType.WALLET_CONNECT,
}
