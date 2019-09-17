import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
	
	
    render() {
        const titles = this.props.titles;
	    return <div>
		    {
			    titles.map(title => {
				    return <ListItem title={title}/>
			    })
		    }
        </div>
    }

}

export default List;