import React from 'react';

class Button extends React.Component {

    render() {
        const className = this.props.className;
        const title = this.props.title;
        const handler = this.props.handler;
        return <button className={`button ${className}`} onClick={handler}>{title}</button>
    }
}

export default Button;