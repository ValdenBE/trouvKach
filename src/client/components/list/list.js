/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Object from "./object";
import MainMap from "../map/main-map";

export default class List extends Component {
    render() {
        if (this.props.viewList) {
            return (
                <div>
                    <p>
                        <span>{"Bonjour, je suis la liste !"}</span>
                    </p>
                    <MainMap />
                    <Object
                        className={"mabite"}
                        value={"test hihi haha"}
                        handleObject={this.props.viewContentUpdate}
                    />
                </div>
            );
        }
        return null;
    }
}
