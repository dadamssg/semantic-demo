/* eslint-disable */
import React, {Component} from 'react'
import {render, waitForElement, cleanup} from 'react-testing-library'
import {expect} from 'chai'

class Foobar extends Component {
  constructor (props) {
    super(props)
    this.state = {showThing: false}
  }
  componentDidMount () {
    this.timeoutId = setTimeout(() => this.setState({showThing: true}), 50)
  }
  componentWillUnmount () {
    clearTimeout(this.timeoutId) // add comment
  }
  render () {
    return (
      <div>
        Hello world
        <a>Link</a>
        {this.state.showThing && <div data-testid='thing' >Thing</div>}
      </div>
    )
  }
}

describe('react-testing-library bugs', () => {
  afterEach(cleanup)
  it('should not barf on MutationObserver being undefined', async () => {
    const {getByTestId} = render(<Foobar />)
    console.log(typeof window.MutationObserver)
    const thingNode = await waitForElement(() => getByTestId('thing'))
    expect(thingNode).to.not.be.null
  })

  it('should not barf on Node being undefined', () => {
    const {getByText} = render(<Foobar />)
    const linkNode = getByText('Link')
    expect(linkNode).to.not.be.null
  })
})
