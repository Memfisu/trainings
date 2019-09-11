import React from 'react';

class Input extends React.Component {
    // state = {
    //     value:"",
    // }
    //
    // handleName = (event) => {
    //     this.setState({value: event.target.value});
    //     this.props.get(event.target.value);
    // }

    render() {
        return <input type="text" className="input-list-item" /*onChange={this.handleName}*/ />
    }
}

export default Input;