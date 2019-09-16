/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import MainPage from "./components/main-page";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atmArray: [],
            loading: true,
            userLat: null,
            userLng: null,
        };
        this.getUserCoords();
    }

    getUserCoords() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                userLat: location.coords.latitude,
                userLng: location.coords.longitude,
                loading: false,
            });
            this.getAtm();
        }, this.error);
    }

    error() {
        console.log("oups");
    }

    updateStateContent() {
        this.setState(prevState => ({
            viewContent: !prevState.viewContent,
        }));
    }

    getAtm() {
        axios
            .get(
                `http://localhost/api/terminal/${this.state.userLat}/${this.state.userLng}/1`,
            )
            .then(response => {
                this.setState(() => ({
                    atmArray: response.data.map(atm => atm),
                    loadingAtm: false,
                }));
            });
    }

    render() {
        if (this.state.loading) {
            return <CircularProgress disableShrink />;
        }
        return (
            <div>
                <Header atmArray={this.state.atmArray} />
                <MainPage
                    viewContentUpdate={this.updateStateContent.bind(this)}
                    atmArray={this.state.atmArray}
                    userLat={this.state.userLat}
                    userLng={this.state.userLng}
                />
            </div>
        );
    }
}
ReactDOM.render(<Trouvkach />, document.querySelector("#app"));
