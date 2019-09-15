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


    setData = () => {
        // this.setState({value: value});
        console.log(this.state.value); //выводит значение стейта value компонента Form в консоль
    }

    render() {
        return <div className="add-info">
            <Input callback = {this.getData}/>
            <Button className={'add-info-button'} title={'V'} handler={this.setData}/>
        </div>
    } //в качестве значения пропса callback передаётся функция getData
    // в качестве значения пропса handler передаётся функция setData
}

export default Form;