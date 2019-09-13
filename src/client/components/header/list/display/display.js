/* TokyoHotel/trouvkach
 *
 * /src/client/components/display/main.js - Main Display component
 *
 * coded by Valden
 * started at 10/09/2019
 */
import React, {Component} from "react";
import MainMap from "./map/main-map";
/*import Content from "./content";*/

export default class Display extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        if (this.props.viewContent) {
            return (
                <div>
                    <div>
                        <span>{"Bonjour, je suis le display !"}</span>
                        <MainMap />
                    </div>
                </div>
            );
        }
        return null;
    }
}
