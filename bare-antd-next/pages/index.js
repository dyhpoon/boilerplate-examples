import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { initStore } from '../store'
import withRematch from '../utils/withRematch'
import Page from '../components/Page'

class Home extends Component {
  render () {
    return (
      <Page>
        <h1> Counter </h1>
        <h3>The count is {this.props.counter}</h3>
        <p>
          <button onClick={this.props.increment}>increment</button>
          <button onClick={() => dispatch.counter.increment(1)}>
            increment (using dispatch function)
          </button>
          <button onClick={this.props.incrementBy(5)}>increment by 5</button>
          <button onClick={this.props.incrementAsync}>incrementAsync</button>
        </p>
        <br />
      </Page>
    )
  }
}

const mapState = state => ({
  counter: state.counter
})

const mapDispatch = ({ counter: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementBy: amount => () => increment(amount),
  incrementAsync: () => incrementAsync(1)
})

export default withRematch(initStore, mapState, mapDispatch)(Home)
