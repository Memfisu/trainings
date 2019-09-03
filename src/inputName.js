import React from 'react';

class inputName extends React.Component {
    state = {
        value:"",
    }

    handleName = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return <input type="text" onChange={this.handleName}/>
    }
}

export default inputName;