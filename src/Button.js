import React from 'react';

class Button extends React.Component {

    render() {
        const className = this.props.className;
        const title = this.props.title;
        return <button className={`button ${className}`}>{title}</button>
        /*реализовать обработчик событий onclick*/
    }
}

export default Button;