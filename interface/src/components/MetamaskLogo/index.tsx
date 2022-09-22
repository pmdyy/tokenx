import React from 'react'
import Box from '@mui/material/Box'
// @ts-ignore
import ModelViewer from '@metamask/logo'

interface MetamaskLogoProps {
  width: number
  height: number
}

class MetamaskLogo extends React.Component<MetamaskLogoProps> {
  viewer: any
  el: any
  componentDidMount() {
    this.viewer = ModelViewer({
      pxNotRatio: true,
      width: this.props.width,
      height: this.props.height,
      followMouse: true,
    })
    this.el.appendChild(this.viewer.container)
  }

  componentWillUnmount() {
    this.viewer.stopAnimation()
  }

  render() {
    return <Box sx={{ display: 'flex' }} ref={(el) => (this.el = el)} />
  }
}

export default React.memo(MetamaskLogo)
