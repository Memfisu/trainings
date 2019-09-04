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
        return <div>
	        <input type="text" placeholder="у сука" className="input-task" onChange={this.handleName}/>
        </div>
    }
}

export default App;
