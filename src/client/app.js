/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
// import Axios from "axios";
import MaMap from "./components/map";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 13,
            userLat: null,
            userLng: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.mapError = this.mapError.bind(this);
        this.alertMap =
            "Your browser don't allow or doesn't support geolocation";
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            location => {
                this.setState({
                    userLat: location.coords.latitude,
                    userLng: location.coords.longitude,
                });
            },
            this.mapError,
            10000,
        );
    }

    mapError() {
        console.log(this.alertMap);
    }

    render() {
        return (
            <MaMap
                userLat={this.state.userLat}
                userLng={this.state.userLng}
                zoom={this.state.zoom}
                className={"leaflet-container"}
            />
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#app"));
