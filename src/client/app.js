/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import List from "./components/header/list/list";
import axios from "axios";

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
        this.getAtm();
    }
    getUserCoords() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                userLat: location.coords.latitude,
                userLng: location.coords.longitude,
                loading: false,
            });
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
        axios.get("http://localhost/api/term/20").then(response => {
            this.setState(() => ({
                atmArray: response.data.map(atm => atm),
                loadingAtm: false,
            }));
        });
    }

    render() {
        if (this.state.loading) {
            return "SEARCHING FOR YOUR POSITION";
        }
        return (
            <div>
                <Header atmArray={this.state.atmArray} />
                <List
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
