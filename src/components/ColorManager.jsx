import React, {Component} from "react";
import ColorList from './ColorList.jsx';
import AddColor from './AddColor.jsx';

class ColorManager extends Component {
    render() {
        return (
            <div className="colorManagerWrapper w-25">

                <AddColor />

                <hr className="text-center w-75 m-lg-auto" />

                <ColorList />

            </div>
        )
    }
}

export default ColorManager;