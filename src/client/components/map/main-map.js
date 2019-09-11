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

export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 17,
            userLat: null,
            userLng: null,
            loading: true,
            atm: [],
        };
        this.loadingMap();
        this.getAtm();
    }

    getAtm() {
        axios.get("http://localhost/api/terminal").then(response => {
            console.log(response.data);
            this.setState({
                atm: [...this.state.atm, ...[response.data]],
            });
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
            return "loading";
        }
        console.log(this.state.atm);
        return (
            <div id={"mapContainer"}>
                <MaMap
                    userLat={this.state.userLat}
                    userLng={this.state.userLng}
                    zoom={this.state.zoom}
                    className={"leaflet-container"}
                    atmLng={this.state.atmLng}
                    atmLat={this.state.atmLat}
                />
            </div>
        );
    }
}
