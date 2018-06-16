import React from "react";

class Header extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div class="App-header">
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

export default Header;