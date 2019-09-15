import React from 'react';

class Button extends React.Component {

    render() {
        const className = this.props.className;
        const title = this.props.title;
        const handler = this.props.handler; // У Button есть пропс handler - то, что будет происходить по клику на кнопку
        return <button className={`button ${className}`} onClick={handler}>{title}</button> //Этот handler будет выполняться onClick
    }
}

export default Button;