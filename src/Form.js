import React from 'react';
import Input from "./Input";
import Button from "./Button";

class Form extends React.Component {
    state = {
        value:"",
    }

    getData = (incomingValue) => {
        this.setState({value: incomingValue}); //записывает в стейт value компонента Form что-то, что придёт в качестве аргумента функции
    }
    

    render() {
	    const handlerButton = this.props.handlerButton;
        return <div className="add-info">
            <Input callback = {this.getData}/>
            <Button className={'add-info-button'} title={'V'} handler={handlerButton}/>
        </div>
    } //в качестве значения пропса callback передаётся функция getData
    // в качестве значения пропса handler передаётся функция setData
}

export default Form;