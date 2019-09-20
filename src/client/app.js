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
import "@babel/polyfill";
import "./style.css";
export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atmArray: [],
            bankArray: [],
            loadingAtm: true,
            loadingBank: true,
            loading: true,
            userLat: null,
            userLng: null,
            radius: 1000,
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

    async getAtm() {
        await axios
            .get(
                `/api/terminal/${this.state.userLat}/${this.state.userLng}/${this.state.radius}`,
            )
            .then(response => {
                this.setState(() => ({
                    atmArray: response.data.map(atm => atm),
                    loadingAtm: false,
                }));
            });

        await axios.get(`/api/banks/`).then(response => {
            this.setState(() => ({
                bankArray: response.data.map(bank => bank),
                loadingBank: false,
            }));
        });
    }

    async updateEmpty(id) {
        await axios
            .post(`/api/empty/${id}`)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    async updateDelete(id) {
        await axios
            .post(`/api/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    updateDistance(event) {
        this.setState({
            radius: event.currentTarget.innerText,
        });
        this.getUserCoords();
    }

    render() {
        if (
            this.state.loading &&
            this.state.loadingBank &&
            this.state.loadingAtm
        ) {
            return <CircularProgress disableShrink />;
        }
        return (
            <div>
                <Header
                    atmArray={this.state.atmArray}
                    distance={this.state.radius}
                    handleDistance={this.updateDistance.bind(this)}
                />
                <MainPage
                    viewContentUpdate={this.updateStateContent.bind(this)}
                    atmArray={this.state.atmArray}
                    userLat={this.state.userLat}
                    userLng={this.state.userLng}
                    bankArray={this.state.bankArray}
                    updateEmpty={this.updateEmpty}
                    updateDelete={this.updateDelete}
                />
            </div>
        );
    }
}
ReactDOM.render(<Trouvkach />, document.querySelector("#app"));
