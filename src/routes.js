import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import './styles/global'

const Routes = () => (
	<div>
		<Switch>
			<Route component={HomeScreen} />
		</Switch>
	</div>
)

const Router = () => (
	<BrowserRouter basename='/datenight'>
		<Routes />
	</BrowserRouter>
)

export default Router
