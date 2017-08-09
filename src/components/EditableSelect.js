import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.div`
	background-color: #333;
	border: none;
	border-radius: 0;
	box-sizing: border-box;
	color: #b3b3b3;
	display: block;
	font-size: 1.15em;
	margin: 0 0 0.5em 0;
	outline: none;
	position: relative;
	width: 100%;

	> input {
		background: transparent;
		border: none;
		box-sizing: border-box;
		color: #b3b3b3;
		font-size: 1.15em;
		outline: none;
		padding: 0.35em;
		position: relative;
		width: 100%;
		z-index: 2;
	}

	ul {
		display: none;
		margin: 0;
		padding: 0;

		&.show {
			display: block;
		}
	}

	li {
		border-top: 1px solid #5a5a5a;
		color: #868686;
		padding: 0.5em;

		&:last-child {
			border-bottom: 1px solid #5a5a5a;
		}
	}

	.dropdown-arrow:before {
		color: #5d5d5d;
		content: '\u25b8';
		font-size: 26px;
		position: absolute;
		right: 13px;
		top: 3px;
		transform: rotate(90deg);
	}
`;

const SetButton = styled.div`
	background: #b16322;
	color: #000;
	display: none;
	font-size: 1em;
	height: 1.4em;
	line-height: 1.4em;
	padding: 0 0.2em;
	position: absolute;
	right: 0.4em;
	top: 0.4em;
	width: auto;
	z-index: 4;

	&.show {
		display: block;
	}
`;

class EditableSelect extends Component {
	constructor() {
		super();

		this.state = {
			showOptions: false,
			showSetButton: false,
			selectedTitle: '',
		};
	}

	selectItem(name, value) {
		if (!value) return;

		this.setState({
			showOptions: false,
			showSetButton: false,
			selectedTitle: name,
		});

		this.props.onChange(this.props.name, value);
	}

	showList() {
		this.setState({
			showOptions: true,
		});
	}

	updateValue(event) {
		this.setState({
			selectedTitle: event.target.value,
			showSetButton: true,
		});
	}

	render() {
		let displayOptions = this.props.options.filter((option, index) => {
			return option.name.toLowerCase().indexOf(this.state.selectedTitle.toLowerCase()) > -1;
		});

		return (
			<Select>
				<input
					value={this.state.selectedTitle}
					onChange={this.updateValue.bind(this)}
					onFocus={this.showList.bind(this)}
				/>
				<ul className={this.state.showOptions ? 'show' : ''}>
					{displayOptions.map((option, key) => {
						return <li
							key={key}
							onClick={() => {
								return this.selectItem(option.name, option.value);
							}}
						>{option.name}</li>;
					})}
				</ul>
				<span className="dropdown-arrow"></span>
				<SetButton
					className={this.state.showSetButton ? 'show' : ''}
					onClick={() => {
						return this.selectItem(this.state.selectedTitle, this.state.selectedTitle);
					}}
				>SET</SetButton>
			</Select>
		);
	}
}

EditableSelect.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
};

export default EditableSelect;
