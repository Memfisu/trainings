import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    render() {
        return <div>
            <ListItem title={'Поиграть в приставку'}/>
            <ListItem title={'Помыть пол'}/>
            <ListItem title={'Сходить в магазин'}/>
            <ListItem title={'Убрать говно'}/>
            <ListItem title={'Пнуть пса'}/>
        </div>
    }

}

export default List;