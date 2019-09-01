import React from 'react';

class App extends React.Component {
    render() {
        function getName (inputName) {
            const name = document.getElementById(inputName).value;
            return name;
        }

        function addName (place, value) {
            document.getElementById(place).innerHTML = value;
        }

        return <div>
            <input id="username" type="text"/>
            <div id="welcome">Hello, {addName(welcome, getName(username))}!</div>
        </div>
    }
}

export default App;
