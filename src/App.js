import React from 'react';
import './style.css';
import GetItem from './GetItem';
import SaveItem from './SaveItem';

class App extends React.Component {
	state = {
		value:"",
	}

    getData = (data) => {
        this.setState({value: data});
    }
	
    render() {
        return <div className="list-general container">
            <div className="add-info">
			<GetItem get={this.getData}/> <SaveItem />
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
