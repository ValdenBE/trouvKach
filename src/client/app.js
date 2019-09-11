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
import List from "./components/list/list";

import HelloWorld from "./components/hello";

export default class Trouvkach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewList: false,
        };
    }

    updateState() {
        this.setState({viewList: true});
    }

    render() {
        return (
            <div>
                <Index viewList={this.updateState.bind(this)} />
                <List viewList={this.state.viewList} />
                <HelloWorld />
            </div>
        );
    }
}
const App = document.querySelector("#app");
ReactDOM.render(<Trouvkach name={""} />, App);
