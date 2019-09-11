import React from 'react';
import './style.css';
import Form from './Form';
import List from './List';

class App extends React.Component {
	state = {
		value:"",
	}

    getData = (value) => {
        // this.setState({value: value});
        console.log(value);
    }

    render() {
        return <div className="list-general">
            <Form getData={this.getData}/>
            <List />
        </div>
    }
}

//передать пропсы из Form в Button -  есть
//реализовать компонент List, в App вывести List - есть
//реализовать компонент ListItem, в List будет пять ListItem с разными пропсами - есть
//по клику на кнопку в console.log будет отображаться значение из Input

export default App;
