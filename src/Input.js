import React from 'react';

class Input extends React.Component {
    state = {
        value:"",
    }

	handleName = (event) => {
		this.setState({value: event.target.value});
	}

    render() {
        return <input type="text" className="input-list-item" />
    }
}

export default Input;