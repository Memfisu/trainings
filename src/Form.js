import React from 'react';
import Input from "./Input";
import Button from "./Button";

class Form extends React.Component {

    render() {
        return <div className="add-info">
            <Input/>
            <Button className={'add-info-button'} title={'V'}/>
        </div>
    }
}

export default Form;