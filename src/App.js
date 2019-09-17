import React from 'react';
import './style.css';
import Form from './Form';
import List from './List';

class App extends React.Component {
	state = {
		value:"",
	}
	
    setData = (value) => {
		// this.setState({value: value});
		console.log(value);
	}
	
    render() {
	    const titles = ["Поиграть в приставку", "Помыть пол", "Сходить в магазин", "Убрать говно", "Пнуть пса"];
        return <div className="list-general">
	        <Form handlerButton={this.setData} />
            <List titles={titles} />
        </div>
    }
}

export default App;
