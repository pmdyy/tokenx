import React from 'react'
import { withRouter, NextRouter } from 'next/router'
import PropTypes from 'prop-types'

export interface Context {
  title: string
  address: string | undefined
}

export interface Props {
  children: React.ReactNode
  router: NextRouter
}

class DashboardProvider extends React.Component<Props> {
  static childContextTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
  }

  getChildContext(): Context {
    return {
      title: 'Token Vision',
      address: this.props.router.query.address as string,
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(DashboardProvider)
