import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.div`
	background-color: #333;
	border: none;
	border-radius: 0;
	box-sizing: border-box;
	color: #fff;
	display: block;
	font-size: 1.15em;
	margin: 0 0 0.5em 0;
	outline: none;
	padding: 0.5em;
	position: relative;
	width: 100%;

	select {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

class EditableSelect extends Component {
	render() {
		let selectedOption = this.props.options.filter((option) => {
			return option.value === this.props.value;
		});

		let selectedOptionName = (selectedOption.length) ? selectedOption[0].name : this.props.placeholder;

		return (
			<Select>
				<select name={this.props.name} value={this.props.value} onChange={this.props.onChange.bind(this)}>
					<option value="" disabled>{this.props.placeholder}</option>
					{this.props.options.map((option, key) => {
						return <option key={key} value={option.value}>{option.name}</option>;
					})}
				</select>
				{selectedOptionName}
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
