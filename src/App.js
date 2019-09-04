import React from 'react';
import InputName from './InputName';
import ReturnName from './ReturnName';

class App extends React.Component {
	state = {
		value:"",
	}
	
   getData = (data) => {
	this.setState({value: data});
}
	
    render() {
        return <div>
	        <InputName get={this.getData}/>
	        <ReturnName username={this.state.value}/>
        </div>
    }
}

export default App;
