import React from 'react';

class InputName extends React.Component {
    state = {
        value:"",
    }

    handleName = (event) => {
        this.setState({value: event.target.value});
	    this.props.get(event.target.value);
    }

    render() {
        return <input type="text" placeholder="у сука" onChange={this.handleName}/>
    }
}

export default InputName;