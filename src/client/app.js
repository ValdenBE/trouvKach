/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import Index from "./components/index/index";
import List from "./components/index/list/list";
import Display from "./components/index/list/display/display";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewList: false,
            viewContent: false,
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
    updateState() {
        this.setState({viewList: true});
    }
    updateStateContent() {
        this.setState(prevState => ({
            viewContent: !prevState.viewContent,
        }));
    }

    getAtm() {
        axios.get("http://localhost/api/term/50").then(response => {
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
