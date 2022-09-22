import React, { useMemo } from 'react'
import { Connection } from 'connection'
import { Connector } from '@web3-react/types'
import { Web3ReactHooks, useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { getConnectionName } from 'connection/utils'
import useEagerlyConnect from 'hooks/useEagerlyConnect'
import useOrderedConnections from 'hooks/useOrderedConnections'

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  useEagerlyConnect()
  const connections = useOrderedConnections()
  const connectors: [Connector, Web3ReactHooks][] = connections.map(({ connector, hooks }) => [connector, hooks])
  const key = useMemo(() => connections.map(({ type }: Connection) => getConnectionName(type)).join('-'), [connections])
  return (
    <Web3ReactProvider connectors={connectors} key={key}>
      {children}
    </Web3ReactProvider>
  )
}
