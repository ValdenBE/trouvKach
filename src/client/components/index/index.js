/* TokyoHotel/trouvkach
 *
 * /src/client/components/index/main.js - Main Index component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Button from "../button";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.maBite = this.maBite.bind(this);
    }

    maBite() {
        return (
            <div>
                <p>
                    <span>{"Bonjour, je suis l'index !"}</span>
                </p>
                <Button
                    handleButton={this.props.viewList}
                    value={"START"}
                    className={"index-btn"}
                />
            </div>
        );
    }

    render() {
        return !this.props.viewList ? this.maBite() : null;
    }
}
