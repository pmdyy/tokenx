import React from 'react'

export interface IWithWidthProviderProps {
  width: number
  height: number
}

const withWidthProvider = (Component: React.ComponentType<any>) => {
  return class wtihWidthProvider extends React.Component {
    container: HTMLDivElement | null = null
    state: IWithWidthProviderProps = {
      width: null,
      height: null,
    }

    componentDidMount() {
      this.setState({
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      })

      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
      this.setState({
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      })
    }

    render() {
      return (
        <div style={{ width: '100%', height: '100%' }} ref={(el: HTMLDivElement) => (this.container = el)}>
          <Component {...this.props} width={this.state.width} height={this.state.height} />
        </div>
      )
    }
  }
}

export default withWidthProvider
