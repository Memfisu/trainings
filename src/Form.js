import React from 'react';
import Input from "./Input";
import Button from "./Button";

class Form extends React.Component {
    state = {
        value:"",
    }

    getData = (incomingValue) => {
        this.setState({value: incomingValue});
    }
    
    sendData = () => {
	    const handlerButton = this.props.handlerButton;
	    const data = this.state.value;
	    handlerButton(data);
    }

    render() {
        return <div className="add-info">
            <Input callback = {this.getData}/>
            <Button className={'add-info-button'} title={'V'} handler={this.sendData}/>
        </div>
    }
}

export default Form;