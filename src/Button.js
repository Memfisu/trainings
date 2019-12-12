import React from 'react';

class Button extends React.Component {

    render() {
        const { className, title, handler } = this.props;
        
        return <button className={`button ${className}`} onClick={handler}>{title}</button>
    }
}

export default Button;