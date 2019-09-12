/* becodeorg/trouvkach
 *
 * /src/client/components/map/mainMap.js - Map entry point
 *
 * coded by Flo
 * started at 10/09/2019
 */

import * as React from "react";
import MaMap from "./map";
// import axios from "axios";

export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.atmArray = this.props.atmArray;
        this.userLat = this.props.userLat;
        this.userLng = this.props.userLng;
        this.zoom = 17;
    }

    render() {
        return (
            <div id={"mapContainer"}>
                <MaMap
                    userLat={this.userLat}
                    userLng={this.userLng}
                    zoom={this.zoom}
                    className={"leaflet-container"}
                    atmArray={this.props.atmArray}
                />
            </div>
        );
    }
}
