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
    }

    loadingMap() {
        navigator.geolocation.getCurrentPosition(
            location => {
                console.log(location.coords);
                this.setState({
                    userLat: location.coords.latitude,
                    userLng: location.coords.longitude,
                    loading: false,
                });
            },
            error => console.log("oups"),
        );
    }

    render() {
        return (
            <div id={"mapContainer"}>
                <h1>{"Prout prout caca prout"}</h1>

                {this.state.loading ? (
                    "loading"
                ) : (
                    <MaMap
                        userLat={this.state.userLat}
                        userLng={this.state.userLng}
                        zoom={this.state.zoom}
                        className={"leaflet-container"}
                    />
                )}
                {this.loadingMap()}
            </div>
        );
    }
}
