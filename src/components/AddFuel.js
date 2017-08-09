import React, { Component } from 'react';
import EditableSelect from './EditableSelect';

const actionOptions = [
	{
		name: 'Test 1',
		value: 'Test 1x',
	},
	{
		name: 'Test 2',
		value: 'Test 1x',
	},
	{
		name: 'Test 3',
		value: 'Test 1x',
	},
	{
		name: 'New York',
		value: 'New Yorkx',
	},
	{
		name: 'California',
		value: 'Californiax',
	},
];

const typeOptions = [
	{
		name: 'type 1',
		value: 'type 1x',
	},
	{
		name: 'type 2',
		value: 'type 2x',
	},
	{
		name: 'type 3',
		value: 'type 3x',
	},
];

class AddFuel extends Component {
	constructor() {
		super();

		this.state = {
			action: '',
			type: '',
		};
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSelectChange(name, value) {
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div>
				<EditableSelect
					name="action"
					value={this.state.action}
					placeholder="Select an action.."
					onChange={(name, value) => {
						this.handleSelectChange(name, value);
					}}
					options={actionOptions}
				/>
				<EditableSelect
					name="type"
					value={this.state.type}
					placeholder="Select a type.."
					onChange={(name, value) => {
						this.handleSelectChange(name, value);
					}}
					options={typeOptions}
				/>
			</div>
		);
	}
}

export default AddFuel;
