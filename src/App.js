import React from 'react';
import './style.css';
import Form from './Form';
import List from './List';

class App extends React.Component {
	state = {
		value:"",
	}
	
    setData = () => {
		// this.setState({value: value});
		console.log(this.state.value); //выводит значение стейта value компонента Form в консоль
	}
	
    render() {
        return <div className="list-general">
            <Form handlerButton={this.setData} />
            <List />
        </div>
    }
}

//передать пропсы из Form в Button -  есть
//реализовать компонент List, в App вывести List - есть
//реализовать компонент ListItem, в List будет пять ListItem с разными пропсами - есть
//по клику на кнопку в console.log будет отображаться значение из Input

export default App;
