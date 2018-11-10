import React from 'react'
import styled from 'styled-components'

const Text = styled.h3`
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 3;
  font-weight: 300;
`

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showing: '',
      id: 0
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  componentDidMount() {
    const { items, pick } = this.props
    const firstTimer = setInterval(() => this.setState({
      showing: items[this.getRandomInt(items.length)],
    }), 70)
    setTimeout(() => clearInterval(firstTimer), 3500)
    
    let secondTimer
    setTimeout(
      () => {
        secondTimer = setInterval(() => this.setState({
          showing: items[this.getRandomInt(items.length)],
        }), 200)
      }, 3500
      )
    setTimeout(() => clearInterval(secondTimer), 7000)

    let thirdTimer
    setTimeout(
      () => {
        thirdTimer = setInterval(() => this.setState({
          showing: items[this.getRandomInt(items.length)],
        }), 400)
      }, 7000
      )
    setTimeout(() => clearInterval(thirdTimer), 10000)
    setTimeout(() => {
      document.querySelector('#pick').classList.add('tada')
    }, 11000)
  }
  render() {
    return (
      <Text id='pick'>{this.state.showing}</Text>
    )
  }
}
  
export default Spinner