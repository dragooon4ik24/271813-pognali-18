import React from 'react'

export default ComposedComponent =>
    class extends React.Component {
        state = {
            isActive: false,
        }

        handleActiveToggle = evt => {
            this.setState(state => ({isActive: !state.isActive}))
        }

        render() {
            return (
                <ComposedComponent
                    {...this.state}
                    {...this.props}
                    onActiveToggle={this.handleActiveToggle}
                />
            )
        }
    }
