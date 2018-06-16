import React from 'react';

class Body extends React.Component {

	handleChange(e) {
		this.props.func(e.target.value);
	}

	render() {
		return (
			<div class="Body-color">
				<br />
				<input onChange={this.handleChange.bind(this)}/>
				<br />
				<h5>Put some word in empty block</h5>
			</div>
		);
	}
}

export default Body;