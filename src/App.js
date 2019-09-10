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
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Поиграть в приставку</div><button className="del-info-button button">X</button></div></div>
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Помыть пол</div><button className="del-info-button button">X</button></div></div>
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Сходить в магазин</div><button className="del-info-button button">X</button></div></div>
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Почесать котэ</div><button className="del-info-button button">X</button></div></div>
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Убрать говно</div><button className="del-info-button button">X</button></div></div>
            <div className="list-item container"><div className="item-container container"><div className="text-container container">Пнуть пса</div><button className="del-info-button button">X</button></div></div>
        </div>
    }
}

export default App;
