import React, {Component} from "react";
// import {TAGS} from "../consts";
import {getColors, checkHash} from "../hash.js";
import ListGroup from "react-bootstrap/ListGroup";

const TAGS = '#tags=';

class ColorList extends Component {
    render() {
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
                <div className="fs-4">Colors:</div>
                {colors.length > 0 &&
                    <ListGroup
                        as="ul"
                        className="colors m-lg-2">
                        {colors.map((color) => <Color name={color} key={color} />)}
                    </ListGroup>
                }
            </>
        )
    }
}

function Color(props) {
    if (!checkHash()) {
        return <></>;
    }
    return (
        <ListGroup.Item
            as="li"
            className="bg-dark text-warning"
            title="Click to remove"
            onClick={() => {
                const colors = window.location.hash.split('=')[1].split(',');
                const colorIndex = colors.indexOf(props.name);
                // Remove the color from URL fragment, if it exists there
                if (colorIndex > -1) {
                    colors.splice(colorIndex, 1);
                    window.location.hash = `${TAGS}${colors.toString()}`;
                }}}
        >
            {props.name}
        </ListGroup.Item>
    )
}

export default ColorList;