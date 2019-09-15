import React from 'react';

class Input extends React.Component {

	handleName = (event) => {
		this.props.callback(event.target.value); //берёт то, что введено в инпут, и записывает в пропс callback
	}

    render() {
        return <input type="text" className="input-list-item" onChange={this.handleName}/> //вызывается при каждом изменении инпута, т.е. callback обновляется при каждом изменении инпута
    }
}

export default Input;