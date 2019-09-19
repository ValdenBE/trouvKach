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
import TxtPop from "./txt-pop";
import atmImg from "./img/atm.png";

import argenta from "./img/atms/argenta.png";
import axa from "./img/atms/axa.png";
import belfius from "./img/atms/belfius.png";
import beobank from "./img/atms/beobank.png";
import bepost from "./img/atms/bepost.png";
import crelan from "./img/atms/crelan.png";
import cbc from "./img/atms/cbc.png";
import kbc from "./img/atms/kbc.png";
import keytrade from "./img/atms/keytrade.png";
import fortis from "./img/atms/fortis.png";
import ing from "./img/atms/ing.png";
import bkcp from "./img/atms/bkcp.png";
import delta from "./img/atms/delta.png";
import deutsche from "./img/atms/deutsche.png";

export default class MaMap extends React.Component {
    constructor(props) {
        super(props);
        this.iconList = [
            {id: "53937660e0b8c05979c6ea55", url: argenta},

            {id: "53937660e0b8c05979c6ea56", url: axa},

            {id: "53937660e0b8c05979c6ea57", url: belfius},

            {id: "53937660e0b8c05979c6ea58", url: beobank},

            {id: "53937660e0b8c05979c6ea59", url: bepost},

            {id: "53937660e0b8c05979c6ea5a", url: crelan},

            {id: "53937660e0b8c05979c6ea5b", url: cbc},

            {id: "53937660e0b8c05979c6ea5c", url: kbc},

            {id: "53937660e0b8c05979c6ea5d", url: keytrade},

            {id: "53937660e0b8c05979c6ea5e", url: fortis},

            {id: "53937660e0b8c05979c6ea5f", url: ing},

            {id: "53937660e0b8c05979c6ea60", url: bkcp},

            {id: "53937660e0b8c05979c6ea61", url: delta},

            {id: "53937660e0b8c05979c6ea62", url: deutsche},
        ];
        this.state = {
            mapCenter: [this.props.userLat, this.props.userLng],
            zoom: 15,
        };
        this.atmIcon = L.icon({
            iconUrl: atmImg,
            iconSize: [38, 38],
            iconAnchor: [12, 92],
            popupAnchor: [-3, -76],
        });
        this.zoom18 = 18;
        this.zoom15 = 15;
        this.markerZoom = this.markerZoom.bind(this);
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

    markerZoom(zoom) {
        if (zoom === 18) {
            this.setState({zoom: 15});
        }
        this.setState({zoom: 18});
    }

    render() {
        const styleMap = {
            height: "51.7rem",
        };

        return (
            <Map
                center={this.state.mapCenter}
                zoom={this.state.zoom}
                style={styleMap}>
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
                                this.markerZoom(this.state.zoom);
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
