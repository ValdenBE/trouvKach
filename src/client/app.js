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
import Index from "./components/index/index";
import List from "./components/index/list/list";
import Display from "./components/index/list/display/display";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "@babel/polyfill";
export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atmArray: [],
            bankArray: [],
            loadingBank: true,
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
            .get(`/api/terminal/${this.state.userLat}/${this.state.userLng}`)
            .then(response => {
                this.setState(() => ({
                    atmArray: response.data.map(atm => atm),
                    loadingAtm: false,
                }));
            });
        axios.get(`/api/banks/`).then(response => {
            this.setState(() => ({
                bankArray: response.data.map(bank => bank),
                loadingBank: false,
            }));
        });
    }

    render() {
        if (this.state.loading && this.state.loadingBank) {
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
                    bankArray={this.state.bankArray}
                />
                <Grid
                    container
                    direction={"column"}
                    justify={"flex-start"}
                    alignItems={"center"}>
                    <Index
                        handleViewListUpdate={this.updateState.bind(this)}
                        viewList={this.state.viewList}
                        atmArray={this.state.atmArray}
                    />
                    <List
                        viewList={this.state.viewList}
                        viewContentUpdate={this.updateStateContent.bind(this)}
                        atmArray={this.state.atmArray}
                    />
                    <Display
                        viewContent={this.state.viewContent}
                        atmArray={this.state.atmArray}
                        userLat={this.state.userLat}
                        userLng={this.state.userLng}
                    />
                </Grid>
            </div>
        );
    }
}
ReactDOM.render(<Trouvkach />, document.querySelector("#app"));
