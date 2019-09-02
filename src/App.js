import React from 'react';

class App extends React.Component {
    state = {
        value:"",
    }
    
    handleName = (event) => {
        this.setState({value: event.target.value});
}

	ifVasya = (name) => {
    	let welcome = "";
		(name.length<3) ? (welcome = "") : (
	(name === "Вася") ? (welcome = "Пошёл нахуй!") : (welcome = "Добро пожаловать!"))
	return welcome;
}
    
    render() {
        return <div>
            <input type="text" onChange={this.handleName}/>
            <div>Привет, {this.state.value}!</div>
	        <div>{this.ifVasya(this.state.value)}</div>
        </div>
    }
}

export default App;
