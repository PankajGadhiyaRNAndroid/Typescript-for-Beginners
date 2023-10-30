import React, { Component } from 'react'

type CounterClassProps = {
    message: string
}

type CounterClassState = {
    count: number
}
export default class CounterClass extends Component<CounterClassProps, CounterClassState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}
