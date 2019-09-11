/* becodeorg/trouvkach
 *
 * /src/client/components/map/mainMap.js - Map entry point
 *
 * coded by Flo
 * started at 10/09/2019
 */

import * as React from "react";
import MaMap from "./map";

export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 17,
            userLat: null,
            userLng: null,
            loading: true,
        };
        this.loadingMap();
    }

    error() {
        console.log("oups");
    }

    loadingMap() {
        navigator.geolocation.getCurrentPosition(location => {
            console.log(location.coords);
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
        return (
            <div id={"mapContainer"}>
                <MaMap
                    userLat={this.state.userLat}
                    userLng={this.state.userLng}
                    zoom={this.state.zoom}
                    className={"leaflet-container"}
                />
            </div>
        );
    }
}
