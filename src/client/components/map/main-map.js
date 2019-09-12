/* becodeorg/trouvkach
 *
 * /src/client/components/map/mainMap.js - Map entry point
 *
 * coded by Flo
 * started at 10/09/2019
 */

import * as React from "react";
import MaMap from "./map";
import axios from "axios";
import "@babel/polyfill";

export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 17,
            userLat: null,
            userLng: null,
            loading: true,
            atmArray: [],
        };
        this.loadingMap();
        this.getAtm();
    }

    getAtm() {
        axios.get("http://localhost/api/term/50").then(response => {
            this.setState(() => ({
                atmArray: response.data.map(atm => atm),
                loadingAtm: false,
            }));
        });
    }

    error() {
        console.log("oups");
    }

    loadingMap() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                userLat: location.coords.latitude,
                userLng: location.coords.longitude,
                loading: false,
            });
        }, this.error);
    }

    render() {
        if (this.state.loading) {
            return "MAIN LOADING";
        }
        return (
            <div id={"mapContainer"}>
                <MaMap
                    userLat={this.state.userLat}
                    userLng={this.state.userLng}
                    zoom={this.state.zoom}
                    className={"leaflet-container"}
                    atmArray={this.state.atmArray}
                />
            </div>
        );
    }
}
