import React from 'react';

class Input extends React.Component {

	handleName = (event) => {
		this.props.callback(event.target.value);
	};

    render() {
    	const { refInput } = this.props;
        return <input type="text" className="input-list-item" onChange={this.handleName} ref={refInput} />
    }
}

export default Input;