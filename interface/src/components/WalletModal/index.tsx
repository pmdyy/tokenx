import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CircularProgress from '@mui/material/CircularProgress'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import CoinbaseWalletIcon from 'components/Icons/CoinbaseWalletIcon'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from '@mui/material/Link'
import MetamaskLogo from 'components/MetamaskLogo'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { useWeb3React } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { getConnection } from 'connection/utils'
import { metaMaskConnection, coinbaseWalletConnection, walletConnectConnection } from 'connection'
import { shortenAddress } from 'utils'
import { updateConnectionError } from 'state/connection/reducer'
import { updateSelectedWallet } from 'state/user/reducer'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import WalletConnectIcon from 'components/Icons/WalletConnectIcon'

const WALLET_VIEWS = {
  ACCOUNT: 'account',
  OPTIONS: 'options',
  PENDING: 'pending',
}

const buttons = [
  {
    key: 'Metamask',
    label: 'Metamask',
    icon: <MetamaskLogo width={32} height={32} />,
    connection: metaMaskConnection,
  },
  {
    key: 'CoinbaseWallet',
    label: 'Coinbase Wallet',
    icon: <CoinbaseWalletIcon width={32} height={32} />,
    connection: coinbaseWalletConnection,
  },
  {
    key: 'WalletConnect',
    label: 'Wallet Connect',
    icon: <WalletConnectIcon width={32} height={32} />,
    connection: walletConnectConnection,
  },
]

function PendingView({
  connector,
  error = false,
  tryActivation,
  openOptions,
}: {
  connector?: Connector
  error?: boolean
  tryActivation: (connector: Connector) => void
  openOptions: () => void
}) {
  if (error) {
    return (
      <Box sx={{ pb: 1 }} justifyContent="center">
        <Typography variant="h6" align="center">
          Error Connecting
        </Typography>
        <Typography sx={{ mt: 2 }} variant="body2" align="center">
          {'The connection attempt failed. Please click try again and follow the steps to connect in your wallet.'}
        </Typography>
        <ButtonGroup sx={{ width: '100%', mt: 4 }} orientation="vertical" aria-label="vertical outlined button group">
          <Button
            sx={{ width: '100%', textTransform: 'capitalize' }}
            key={'button-disconnect'}
            onClick={() => tryActivation(connector)}
          >
            <Stack
              sx={{ width: '100%', padding: '0.5rem' }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>{'Try Again'}</Typography>
            </Stack>
          </Button>
        </ButtonGroup>
      </Box>
    )
  }
  return (
    <Box>
      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ py: '3rem' }} spacing={5}>
        {error ? (
          <Typography variant="body1" color="lightslategray">
            {'The connection attempt failed. Please click try again and follow the steps to connect in your wallet.'}
          </Typography>
        ) : (
          <>
            <CircularProgress />
            <Typography variant="h6">Connecting...</Typography>
          </>
        )}
      </Stack>
    </Box>
  )
}

export default function WalletModal() {
  const dispatch = useAppDispatch()
  const { account, connector, isActive, isActivating } = useWeb3React()

  const [walletView, setWalletView] = React.useState(account ? WALLET_VIEWS.ACCOUNT : WALLET_VIEWS.OPTIONS)
  const selectedWallet = useAppSelector((state) => state.user.selectedWallet)

  const [pendingConnector, setPendingConnector] = React.useState<Connector | undefined>()
  const pendingError = useAppSelector((state) =>
    pendingConnector ? state.connection.errorByConnectionType[getConnection(pendingConnector).type] : undefined
  )

  const [open, setOpen] = React.useState(false)

  const openOptions = React.useCallback(() => {
    setWalletView(WALLET_VIEWS.OPTIONS)
  }, [setWalletView])

  React.useEffect(() => {
    if (account) {
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [account, walletView])

  React.useEffect(() => {
    if (pendingConnector && walletView !== WALLET_VIEWS.PENDING) {
      updateConnectionError({ connectionType: getConnection(pendingConnector).type, error: undefined })
      setPendingConnector(undefined)
    }
  }, [pendingConnector, walletView])

  const tryActivation = React.useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector).type
      try {
        setPendingConnector(connector)
        setWalletView(WALLET_VIEWS.PENDING)
        dispatch(updateConnectionError({ connectionType, error: undefined }))

        await connector.activate()

        dispatch(updateSelectedWallet({ wallet: connectionType }))
      } catch (error) {
        console.debug(`web3-react connection error: ${error}`)
        dispatch(updateConnectionError({ connectionType, error: error.message }))
      }
    },
    [dispatch]
  )

  const disconnect = React.useCallback(async () => {
    if (connector && connector.deactivate) {
      await connector.deactivate()
    }
    await connector.resetState()
    setWalletView(WALLET_VIEWS.OPTIONS)
    dispatch(updateSelectedWallet({ wallet: undefined }))
  }, [connector, dispatch])

  let headerRow
  if (walletView === WALLET_VIEWS.OPTIONS || walletView === WALLET_VIEWS.ACCOUNT) {
    headerRow = (
      <Box>
        <Stack justifyContent="space-between" alignItems="center" direction="row">
          <Typography variant="h6" style={{ fontSize: 18 }}>
            {walletView === WALLET_VIEWS.OPTIONS ? 'Choose Your Wallet' : 'Your Wallet'}
          </Typography>
          <IconButton color="inherit" sx={{ left: 10 }} onClick={() => setOpen(false)}>
            <CloseTwoToneIcon sx={{ color: 'rgb(51, 153, 255)' }} />
          </IconButton>
        </Stack>
      </Box>
    )
  } else {
    headerRow = (
      <Box>
        <Stack justifyContent="space-between" alignItems="center" direction="row">
          <IconButton color="inherit" sx={{ right: 10 }} onClick={openOptions}>
            <ArrowBackIcon sx={{ color: 'rgb(51, 153, 255)' }} />
          </IconButton>
          <IconButton color="inherit" sx={{ left: 10 }} onClick={() => setOpen(false)}>
            <CloseTwoToneIcon sx={{ color: 'rgb(51, 153, 255)' }} />
          </IconButton>
        </Stack>
      </Box>
    )
  }

  function getTermsOfService() {
    return (
      <Box sx={{ pb: 1 }}>
        <Stack direction="row" alignItems="center">
          <InfoTwoToneIcon sx={{ color: 'rgb(51, 153, 255)', mr: 2 }} fontSize="medium" />
          <Typography variant="body2" sx={{ color: 'lightslategray' }}>
            By connecting your wallet, you agree to our{' '}
            <Link href="#">
              <b>Terms of Service</b>
            </Link>{' '}
            and our{' '}
            <Link href="#">
              <b>Privacy Policy</b>
            </Link>
            .
          </Typography>
        </Stack>
      </Box>
    )
  }

  function getModalContent() {
    if (walletView == WALLET_VIEWS.ACCOUNT) {
      console.log('rendering account')
      return (
        <React.Fragment>
          <Box sx={{ mt: 3 }}>
            <ButtonGroup sx={{ width: '100%' }} orientation="vertical" aria-label="vertical outlined button group">
              <Button
                sx={{ width: '100%', textTransform: 'capitalize' }}
                key={'button-disconnect'}
                onClick={disconnect}
              >
                <Stack
                  sx={{ width: '100%', padding: '0.5rem' }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>{'Disconnect'}</Typography>
                </Stack>
              </Button>
            </ButtonGroup>
          </Box>
        </React.Fragment>
      )
    }

    if (walletView == WALLET_VIEWS.OPTIONS || walletView == WALLET_VIEWS.PENDING) {
      console.log('rendering options')
      return (
        <React.Fragment>
          <Box>
            {!(walletView === WALLET_VIEWS.PENDING && pendingConnector) ? (
              <ButtonGroup
                sx={{ my: 3, width: '100%' }}
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                {buttons.map((button) => (
                  <Button
                    sx={{ width: '100%', textTransform: 'capitalize' }}
                    key={button.key}
                    onClick={() => tryActivation(button.connection.connector)}
                  >
                    <Stack
                      sx={{ width: '100%', padding: '0.5rem' }}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>{button.label}</Typography>
                      {button.icon}
                    </Stack>
                  </Button>
                ))}
              </ButtonGroup>
            ) : (
              <PendingView
                connector={pendingConnector}
                error={!!pendingError}
                tryActivation={tryActivation}
                openOptions={openOptions}
              />
            )}
          </Box>
          {!pendingError && walletView != WALLET_VIEWS.PENDING && getTermsOfService()}
        </React.Fragment>
      )
    }
  }

  return (
    <Box>
      <Button variant="primary" sx={{ textTransform: 'capitalize' }} variant="outlined" onClick={() => setOpen(true)}>
        {isActive ? shortenAddress(account) : 'Connect Wallet'}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#0b1d32',
              maxWidth: 470,
              width: 'calc(100% - 25px)',
              boxShadow: 0,
              py: 2,
              px: 3,
            }}
          >
            {headerRow}
            {getModalContent()}
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}
