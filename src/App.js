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
			<div className="list-item container">Поиграть в приставку <button className="del-info-button button">X</button></div>
            <div className="list-item container">Помыть пол <button className="del-info-button button">X</button></div>
            <div className="list-item container">Сходить в магазин <button className="del-info-button button">X</button></div>
            <div className="list-item container">Почесать котэ <button className="del-info-button button">X</button></div>
            <div className="list-item container">Убрать говно <button className="del-info-button button">X</button></div>
            <div className="list-item container">Пнуть пса <button className="del-info-button button">X</button></div>
        </div>
    }
}

export default App;
