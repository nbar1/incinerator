import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Fuel from './Fuel';
import AddFuel from './AddFuel';

const ContentWrapper = styled.div`
	box-sizing: border-box;
	padding: 3.5em 0.5em 0;
`;

class Main extends Component {
	render() {
		return (
			<ContentWrapper>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/fuel' component={Fuel} />
					<Route exact path='/fuel/add' component={AddFuel} />
				</Switch>
			</ContentWrapper>
		);
	}
}

export default Main;
