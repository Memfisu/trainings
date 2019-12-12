import React from 'react';
import './style.css';
import Form from './Form';
import List from './List';

class App extends React.Component {
	state = {
		value: [],
	};
	
    setData = (value) => {
	    const newVal =[...this.state.value, value];
		this.setState({value: newVal});
	};
	
	getData = () => {
		return this.state.value || [];
	};
	
	deleteItem = (array, index) => {
		const result = [...array];
		result.splice(index, 1);
		return result;
	};
	
	onDelete = (index) => {
		const newVal =[...this.state.value];
		const result = this.deleteItem(newVal, index);
		this.setState({value: result});
	};
	
    render() {
	    const titles = this.getData();
	    
        return <div className="list-general">
	        <Form handlerButton={this.setData} />
            <List titles={titles} listHandler={this.onDelete} />
        </div>
    }
}

export default App;
