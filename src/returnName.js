import React from 'react';

class returnName extends React.Component {
    state = {
        value:"",
    }

    ifVasya = (name) => {
        let welcome = "";
        (name.length<3) ? (welcome = "") : (
            (name === "Вася") ? (welcome = "Пошёл нахуй!") : (welcome = "Добро пожаловать!"))
        return welcome;
    }

    render() {
        return <div>
            <div>{(this.state.value.length > 1) ? (<div>Привет, {this.state.value}!</div>) : null}</div>
            <div>{this.ifVasya(this.state.value)}</div>
        </div>
    }
}

export default returnName;