/* TokyoHotel/trouvkach
 *
 * /src/client/components/display/main.js - Main Display component
 *
 * coded by Valden
 * started at 10/09/2019
 */
import React, {Component} from "react";
/*import Content from "./content";*/

export default class Display extends Component {
    render() {
        if (this.props.viewContent) {
            return (
                <div>
                    <p>
                        <span>{"Bonjour, je suis le display !"}</span>
                    </p>
                </div>
            );
        }
        return null;
    }
}
