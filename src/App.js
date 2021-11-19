import React, {useState} from "react";
import './css/App.css';
import ColorList from './components/ColorList.jsx';
import AddColor from './components/AddColor.jsx';

function App() {
    const [hash, setHash] = useState(window.location.hash);

    window.addEventListener("hashchange", () => setHash(window.location.hash.toLowerCase()));

    return (
        <div className="App pt-xl-5">
            <div className="text-primary">
                <div>Only text values are allowed.</div>
                <div>Every color will be present just once.</div>
                <div>Enjoy.</div>
            </div>

            <hr />

            <AddColor />

            <ColorList />

            <hr />

            <div className="fs-6 text-secondary">
                <div>Made by Michal Grosser for Radio Free Europe / Radio Liberty.</div>
                <div>Made using ReactJS & Bootstrap.</div>
            </div>
        </div>
    )
}

export default App;
