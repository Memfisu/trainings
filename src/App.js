import React from 'react';

class App extends React.Component {
    render() {
        function getName (inputName) {
            const name = document.getElementById(inputName).value;
            return name;
        }

        return <div>
            <input id="username" type="text"/>
            <div>Hello, {username.oninput(getName(username))}!</div>
        </div>
    }
}

export default App;
