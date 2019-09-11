/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import MainMap from "./components/map/main-map";

export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <MainMap />;
    }
}
ReactDOM.render(<App />, document.querySelector("#app"));
