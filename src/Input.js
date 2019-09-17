import React from 'react';

class Input extends React.Component {

	handleName = (event) => {
		this.props.callback(event.target.value);
	}

    render() {
        return <input type="text" className="input-list-item" onChange={this.handleName}/>
    }
}

export default Input;