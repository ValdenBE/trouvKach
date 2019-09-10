/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Object from "./object";
import Filter from "./filter";

export default class main extends Component {
    constructor(props) {
        super(props);
        this.view = this.props.viewList;
    }
    render() {
        if (this.view) {
            return (
                <div>
                    <Object />
                    <Filter />
                </div>
            );
        }
        return null;
    }
}
