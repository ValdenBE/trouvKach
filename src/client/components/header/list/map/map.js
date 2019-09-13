/* becodeorg/trouvkach
 *
 * /src/client/components/map/map.js - Map Component
 *
 * coded by Flo
 * started at 10/09/2019
 */

import * as React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import atmImg from "./img/atm.png";
import ForTestOnly from "./componentalacon";

export default class MaMap extends React.Component {
    constructor(props) {
        super(props);
        this.zoom = this.props.zoom;
        this.userPosition = [this.props.userLat, this.props.userLng];
        this.atmArray = this.props.atmArray;
        this.atmIcon = L.icon({
            iconUrl: atmImg,
            iconSize: [38, 38],
            iconAnchor: [22, 92],
            popupAnchor: [-3, -76],
        });
    }

    render() {
        const styleMap = {
            height: "500px",
        };
        return (
            <Map
                center={[this.props.userLat, this.props.userLng]}
                zoom={this.zoom}
                style={styleMap}>
                <TileLayer
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                />
                <Marker position={this.userPosition}>
                    <Popup>{"You are here"}</Popup>
                </Marker>
                {this.props.atmArray.map(el => (
                    <Marker
                        key={el._id}
                        position={el.position}
                        icon={this.atmIcon}>
                        <Popup style={{textTransform: "uppercase"}}>
                            <ForTestOnly />
                        </Popup>
                    </Marker>
                ))}
            </Map>
        );
    }
}
// {
//     // `id: ${el._id}`;
// }
