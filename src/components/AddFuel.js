import React, { Component } from 'react';
import EditableSelect from './EditableSelect';

const actionOptions = [
	{
		name: 'Test 1',
		value: 'test1',
	},
	{
		name: 'Test 2',
		value: 'test2',
	},
	{
		name: 'Test 3',
		value: 'test3',
	},
];

const typeOptions = [
	{
		name: 'type 1',
		value: 'test1',
	},
	{
		name: 'type 2',
		value: 'test2',
	},
	{
		name: 'type 3',
		value: 'test3',
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

	render() {
		return (
			<div>
				<EditableSelect
					name="action"
					value={this.state.action}
					placeholder="Select an action.."
					onChange={this.handleChange}
					options={actionOptions}
				/>
				<EditableSelect
					name="type"
					value={this.state.type}
					placeholder="Select a type.."
					onChange={this.handleChange}
					options={typeOptions}
				/>
			</div>
		);
	}
}

export default AddFuel;
