import React from 'react';

class ReturnName extends React.Component {
	
	ifVasya = (name) => {
        let welcome = "";
        (name.length<3) ? (welcome = "") : (
            (name === "Вася") ? (welcome = "Пошёл нахуй!") : (welcome = "Добро пожаловать!"))
        return welcome;
    }

    render() {
	    const username = this.props.username;
        return <div>
            <div>{(username.length > 1) ? (<div>Привет, {username}!</div>) : null}</div>
            <div>{this.ifVasya(username)}</div>
        </div>
    }
}

export default ReturnName;