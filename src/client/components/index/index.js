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
    render() {
        if (!this.props.viewList) {
            return (
                <div>
                    <p>
                        <span>{"Bonjour, je suis l'index !"}</span>
                    </p>
                    <Button
                        handleButton={this.props.viewListUpdate}
                        value={"START"}
                        className={"index-btn"}
                    />
                </div>
            );
        }
        return null;
    }
}
