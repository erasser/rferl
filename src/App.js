import React, {Component, useState} from "react";
import logo from './logo.svg';
import './App.css';
import './components/test';

const tags = '#tags=';

function App() {
    const [hash, setHash] = useState(window.location.hash);

    window.addEventListener("hashchange", () => setHash(window.location.hash));

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AddColor />
                <ShowColors />
                <div>Only text values are allowed</div>
                <div>Every color can be added just once</div>
            </header>
        </div>
    )
}

class AddColor extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    render() {
        if (!checkHash()) {
            return <></>;
        }
        return (
            <>
                <input
                    id="newColor"
                    maxLength="16"
                    ref={this.textInput}/>

                <button
                    onClick={() => {
                        if (!/[A-Za-z]/.test(this.textInput.current.value)) {
                            alert('Please enter just english alphabetical characters.');
                            return;
                        }
                        const colors = getColors();
                        // Add new color only if it does not exist yet
                        if (colors.indexOf((this.textInput.current.value).toLowerCase()) === -1) {
                            if (colors.length === 1 && colors[0] === '') {
                                colors.length = 0;
                            }
                            colors.push(this.textInput.current.value);
                            window.location.hash = `${tags}${colors.toString()}`;
                            this.textInput.current.value = '';
                        }
                    }}
                >
                    Add this color
                </button>
            </>
        )
    }
}

function Color(props) {
    if (!checkHash()) {
        return <></>;
    }
    return (
        <li
            title="Click to remove"
            onClick={() => {
                const colors = window.location.hash.split('=')[1].split(',');
                const colorIndex = colors.indexOf(props.name);
                // Remove the color from URL fragment, if it exists there
                if (colorIndex > -1) {
                    colors.splice(colorIndex, 1);
                    window.location.hash = `${tags}${colors.toString()}`;
            }}}
        >
            {props.name}
        </li>
    )
}

function ShowColors() {
    if (!checkHash()) {
        return <></>;
    }
    // Get a list of colors from URL fragment
    const colors = getColors();
    if (colors.length === 1 && colors[0] === '') {
        colors.length = 0;
    }

    return (
        <>
            <h1>Colors:</h1>
            {colors.length > 0 &&
                <ul className="colors">
                    {colors.map((color) => <Color name={color} key={Math.random()}/>)} {/*TODO*/}
                </ul>
            }
        </>
    )
}

function getColors() {
    return window.location.hash.split('=')[1].split(',');
}

function checkHash() {
    return window.location.hash.substring(0, 6) === tags;
}

export default App;
