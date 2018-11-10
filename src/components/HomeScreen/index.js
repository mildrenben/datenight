import React from 'react'
import weightedDice from 'weighteddice'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'
import Spinner from '../Spinner'

const Main = styled.main`
	width: 400px;
	max-width: calc(100% - 20px);
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 20px;
`

const Header = styled.h1`
	grid-column-start: 1;
	grid-column-end: 3;
`

class HomeScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			idCounter: 2,
			pick: null
		}
		this.increment = this.increment.bind(this)
		this.pick = this.pick.bind(this)
		this.getInputs = this.getInputs.bind(this)
	}
	increment() {
		this.setState({
			idCounter: this.state.idCounter + 2
		})
	}
	getInputs() {
		const inputs = Array.from(document.querySelectorAll('input'))
		const values = inputs.map(input => input.value)
		const filtered = values.filter(value => value)
		return filtered
	}
	pick() {
		const inputs = this.getInputs()
		const values = inputs.map(input => ({
			thing: input,
			weight: 100 / inputs.length
		}))
		const pick = weightedDice(values)
		this.setState({ pick })
	}
	render() {
		const { idCounter, pick } = this.state
		const inputs = this.getInputs()
		return (
			<Main>
				<Header>Date night picker</Header>
				{Array(idCounter).fill().map((n, idx) => <Input key={idx} id={idx}/>)}
				<Button onClick={this.increment}>add</Button>
				<Button onClick={this.pick}>random</Button>
				{/* {pick && <p>{pick}</p>} */}
				{pick && <Spinner items={inputs} pick={pick}/>}
			</Main>
		)
	}
}

export default HomeScreen
