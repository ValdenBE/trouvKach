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
const mapStyle = {
    marginLeft: "390px",
    marginRight: "40px",
    marginTop: "-30px",
};
export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.zoom = 17;
    }

    render() {
        return (
            <div id={"mapContainer"} style={mapStyle}>
                <MaMap
                    userLat={this.props.userLat}
                    userLng={this.props.userLng}
                    zoom={this.zoom}
                    className={"leaflet-container"}
                    atmArray={this.props.atmArray}
                />
            </div>
        );
    }
}
