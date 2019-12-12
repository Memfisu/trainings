import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
	
	
    render() {
        const { titles, listHandler } = this.props;
	    return <div>
		    {
			    titles.map((title, key) => {
				    return <ListItem title={title} key={key} listHandler={listHandler} index={key} />
			    })
		    }
        </div>
    }

}

export default List;