import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../flame.svg';

const HeaderWrapper = styled.div`
	background: #000;
	height: 3em;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
`;

const Logo = styled.img`
	height: 2em;
	position: fixed;
	top: 0.5em;
	right: 0.25em;
	width: 2em;
`;

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Link to="/fuel"><Logo alt="Incinerator" src={logo} /></Link>
			</HeaderWrapper>
		);
	}
}

export default Header;
