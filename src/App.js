import React, {useState} from "react";
import './css/App.css';
import ColorManager from './components/ColorManager.jsx';

function App() {
    const [hash, setHash] = useState(window.location.hash);

    window.addEventListener("hashchange", () => setHash(window.location.hash.toLowerCase()));

    return (
        <>
            <div className="text-primary mt-lg-2">
                <div>Only text values are allowed.</div>
                <div>Every color will be present just once.</div>
                <div>Enjoy.</div>
            </div>

            <hr className="text-center w-50 m-lg-auto mt-lg-3" />

            <div className="componentContainer pt-xl-5">

                <ColorManager />
                <ColorManager />
                <ColorManager />

            </div>

            <hr className="text-center w-50 m-lg-auto mt-lg-5" />

            <div className="fs-6 text-secondary">
                <div>Made by Michal Grosser for Radio Free Europe / Radio Liberty.</div>
                <div>Made using ReactJS & Bootstrap.</div>
            </div>
        </>
    )
}

export default App;
