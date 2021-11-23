import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getColors, checkHash} from "../hash.js";

const TAGS = '#tags=';

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
            <Form>
                <Form.Control
                    className="newColorName text-center w-50 m-lg-auto fs-4 p-lg-1 rounded-pill"
                    maxLength="16"
                    ref={this.textInput}
                />

                <Button
                    className="m-lg-3"
                    onClick={() => {
                        if (!/^[a-zA-Z]*$/g.test(this.textInput.current.value)) {
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
                            window.location.hash = `${TAGS}${colors.toString()}`;
                            this.textInput.current.value = '';
                        }
                    }}
                >
                    Add this color
                </Button>
            </Form>
        )
    }
}

export default AddColor;