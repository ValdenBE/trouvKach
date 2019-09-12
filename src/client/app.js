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
import axios from "axios";

export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewList: false,
            viewContent: false,
            atmArray: [],
            loadingAtm: true,
        };
        this.getApi();
    }

    getApi() {
        axios.get("http://localhost/api/term/25").then(response => {
            this.setState(() => ({
                atmArray: response.data.map(atm => atm),
                loadingAtm: false,
            }));
        });
    }

    updateState() {
        this.setState({viewList: true});
    }
    updateStateContent() {
        this.setState(prevState => ({
            viewContent: !prevState.viewContent,
        }));
    }

    render() {
        if (this.state.loadingAtm) {
            return "LOADING";
        }
        console.log(this.state.atmArray);
        return (
            <div>
                <Index
                    handleViewListUpdate={this.updateState.bind(this)}
                    viewList={this.state.viewList}
                />
                <List
                    viewList={this.state.viewList}
                    viewContentUpdate={this.updateStateContent.bind(this)}
                    atmArray={this.state.atmArray}
                />
                <Display viewContent={this.state.viewContent} />
            </div>
        );
    }
}
const App = document.querySelector("#app");
ReactDOM.render(<Trouvkach name={""} />, App);
