/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

export default class MaMap extends React.Component {
    constructor(props) {
        super(props);
        this.userLat = this.props.userLat;
        this.userLng = this.props.userLng;
        this.zoom = this.props.zoom;
        this.userPosition = [this.userLat, this.userLng];
    }

    render() {
        const styleMap = {
            height: "500px",
            width: "500px",
        };
        return (
            <Map center={this.userPosition} zoom={this.zoom} style={styleMap}>
                <TileLayer
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                />
                <Marker position={this.userPosition}>
                    <Popup>
                        {"A pretty CSS3 popup.  Easily customizable."}
                    </Popup>
                </Marker>
            </Map>
        );
    }
}
