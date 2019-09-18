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
        this.state = {
            mapCenter: [this.props.userLat, this.props.userLng],
        };
    }
    // pour update state des props
    static getDerivedStateFromProps(props, state) {
        if (Array.isArray(props.currentAtm)) {
            if (
                props.currentAtm[0] !== state.mapCenter[0] ||
                props.currentAtm[1] !== state.mapCenter[1]
            ) {
                return {mapCenter: props.currentAtm};
            }
        }
        return null;
    }

    render() {
        const styleMap = {
            height: "51.7rem",
        };

        return (
            <Map center={this.state.mapCenter} zoom={16} style={styleMap}>
                <TileLayer
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                />
                {/* user marker position with center setState*/}
                <Marker
                    position={[this.props.userLat, this.props.userLng]}
                    onClick={() => {
                        this.setState({
                            mapCenter: [this.props.userLat, this.props.userLng],
                        });
                    }}>
                    <Popup>{"You are here"}</Popup>
                </Marker>

                {/* map on atm array => retrieving atm's positions and center on click  */}
                {this.props.atmArray.map(el => {
                    const coords = [
                        el.position.coordinates[1],
                        el.position.coordinates[0],
                    ];
                    return (
                        <Marker
                            key={el._id}
                            position={coords}
                            icon={this.atmIcon}
                            onClick={() => {
                                this.setState({
                                    mapCenter: [
                                        el.position.coordinates[1],
                                        el.position.coordinates[0],
                                    ],
                                });
                            }}>
                            <Popup style={{textTransform: "uppercase"}}>
                                <TxtPop atm={el} banks={this.props.bankArray} />
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
