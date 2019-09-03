import React from 'react';
import inputName from './inputName';
import returnName from './returnName';

class App extends React.Component {
    render() {
        return <div>
            <input type="text" onChange={inputName.handleName}/>
	        <div>{(this.state.value.length > 1) ? (<div>Привет, {this.state.value}!</div>) : null}</div>
	        <div>{this.ifVasya(this.state.value)}</div>
        </div>
    }
}

export default App;
