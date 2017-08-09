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

	> div {
		padding: 0.5em;
		position: relative;
		z-index: 2;
	}

	ul {
		display: none;
		margin: 0;
		padding: 0;

		&.show {
			border-bottom: 1px solid #5a5a5a;
			display: block;
		}
	}

	li {
		border-top: 1px solid #5a5a5a;
		padding: 0.5em;
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

class EditableSelect extends Component {
	constructor() {
		super();

		this.state = {
			showOptions: false,
		};
	}

	selectItem(value) {
		this.setState({
			showOptions: false,
		});

		this.props.onChange(this.props.name, value);
	}

	toggleList() {
		this.setState({
			showOptions: !this.state.showOptions,
		});
	}

	render() {
		let selectedOption = this.props.options.filter((option) => {
			return option.value === this.props.value;
		});

		let selectedOptionName = (selectedOption.length) ? selectedOption[0].name : this.props.placeholder;

		return (
			<Select>
				<div onClick={this.toggleList.bind(this)}>{selectedOptionName}</div>
				<ul className={this.state.showOptions ? 'show' : ''}>
					{this.props.options.map((option, key) => {
						return <li
							key={key}
							onClick={() => {
								return this.selectItem(option.value);
							}}
						>{option.name}</li>;
					})}
				</ul>
				<span className="dropdown-arrow"></span>
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
