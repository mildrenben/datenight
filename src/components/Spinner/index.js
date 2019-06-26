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
			id: 0,
			tick: 0,
			foo: 0,
			elapsed: 0
		}
	}
	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	componentDidUpdate(prevProps) {
		const { elapsed, showing } = this.state

		
		console.log(elapsed, this.props.items[this.getRandomInt(this.props.items.length)])

		const { items } = this.props
		
		const random = this.getRandomInt(items.length - 1)
		const itemsWithoutShowing = items.filter(item => item !== showing)
		const newShowing = itemsWithoutShowing[random]
	
		const newElapsed = (elapsed + elapsed / 20)

		setTimeout(() => this.setState({ 
			elapsed: newElapsed,
			showing: newShowing
		}), newElapsed)
	}
	componentDidMount() {
		const { items, pick } = this.props
console.log(this.state, 'YO')
		this.setState({ elapsed: 1 })

		// const firstTimer = setInterval(() => this.setState({
		// 	showing: items[this.getRandomInt(items.length)],
		// }), 70)
		// setTimeout(() => clearInterval(firstTimer), 3500)
    
		// let secondTimer
		// setTimeout(
		// 	() => {
		// 		secondTimer = setInterval(() => this.setState({
		// 			showing: items[this.getRandomInt(items.length)],
		// 		}), 200)
		// 	}, 3500
		// )
		// setTimeout(() => clearInterval(secondTimer), 7000)

		// let thirdTimer
		// setTimeout(
		// 	() => {
		// 		thirdTimer = setInterval(() => this.setState({
		// 			showing: items[this.getRandomInt(items.length)],
		// 		}), 400)
		// 	}, 7000
		// )
		// setTimeout(() => clearInterval(thirdTimer), 10000)
		// setTimeout(() => {
		// 	document.querySelector('#pick').classList.add('tada')
		// }, 11000)
	}
	render() {
		return (
			<Text id='pick'>{this.state.showing}</Text>
		)
	}
}
  
export default Spinner