import React from 'react';
import Button from './Button';

class ListItem extends React.Component {
	state = {
		isVisible: true,
	};
    
    render() {
        const { title, listHandler, index } = this.props;

        return <div className="list-item">
            <div className="text-container">{title}</div>
            <Button className={'del-info-button'} title={'X'} handler={() => listHandler(index)}/>
        </div>
    }
}

export default ListItem;