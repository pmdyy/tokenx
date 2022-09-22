import React from 'react'

const withControls = (Component: React.ComponentType<any>) => {
  return class withControls extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        columns: [
          { key: 'id', name: 'ID' },
          { key: 'title', name: 'Title' },
        ],
        rows: [
          { id: 0, title: 'Example' },
          { id: 1, title: 'Demo' },
        ],
      }
    }
    render() {
      return <Component {...this.state} />
    }
  }
}

export default withControls
