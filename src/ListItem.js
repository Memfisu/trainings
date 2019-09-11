import React from 'react';
import Button from './Button';

class ListItem extends React.Component {

    render() {
        const className = this.props.className;
        const title = this.props.title;

        return <div className="list-item">
            <div className="text-container">{title}</div>
            <Button className={'del-info-button'} title={'X'}/>
        </div>
    }
}

export default ListItem;