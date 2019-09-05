import React from 'react';
import './style.css';

class App extends React.Component {
	state = {
		value:"",
	}
	
	handleName = (event) => {
		this.setState({value: event.target.value});
	}
	
    render() {
        return <div className="list-general container">
	        <div className="add-info">
			<input type="text" className="input-list-item" onChange={this.handleName}/>
			<button className="add-info-button button">V</button>
			</div>
			<div className="list-item container">Поиграть в приставку</div>
            <div className="list-item container">Помыть пол</div>
            <div className="list-item container">Сходить в магазин</div>
            <div className="list-item container">Почесать котэ</div>
            <div className="list-item container">Убрать говно</div>
            <div className="list-item container">Пнуть пса</div>
        </div>
    }
}

export default App;
