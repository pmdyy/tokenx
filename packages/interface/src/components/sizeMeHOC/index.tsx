import React, { Component } from 'react'
import sizeMe from 'react-sizeme'

const sizeMeHOC = sizeMe({
  monitorWidth: true,
  refreshRate: 16,
})

export default (ComposedComponent) =>
  sizeMeHOC(
    class extends Component<any, any> {
      render() {
        const { width } = this.props.size
        return <ComposedComponent {...this.props} width={width} {...this.state} />
      }
    }
  )

sizeMeHOC.displayName = 'SizeMeHoc'
