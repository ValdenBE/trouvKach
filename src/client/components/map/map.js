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
import TxtPop from "./txt-pop";

export default class MaMap extends React.Component {
    constructor(props) {
        super(props);
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
                zoom={this.props.zoom}
                style={styleMap}>
                <TileLayer
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                />
                <Marker position={[this.props.userLat, this.props.userLng]}>
                    <Popup>{"You are here"}</Popup>
                </Marker>
                {this.props.atmArray.map(el => {
                    const coords = [
                        el.position.coordinates[1],
                        el.position.coordinates[0],
                    ];
                    return (
                        <Marker
                            key={el._id}
                            position={coords}
                            icon={this.atmIcon}>
                            <Popup style={{textTransform: "uppercase"}}>
                                <TxtPop data={el} />
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>
        );
    }
}
// {
//     // `id: ${el._id}`;
// }
