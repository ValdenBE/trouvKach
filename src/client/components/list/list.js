/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Object from "./object";
import MainMap from "../map/main-map";
import axios from "axios";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atmData: [],
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost/api/terminal")
            .then(response => {
                this.setState({atmData: response.data});
                console.log(this.state.atmData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (this.props.viewList) {
            return (
                <div>
                    <p>
                        <span>{"Bonjour, je suis la liste !"}</span>
                    </p>
                    <MainMap />
                    <Object
                        className={"mabite"}
                        value={"test hihi haha"}
                        handleObject={this.props.viewContentUpdate}
                    />
                </div>
            );
        }
        return null;
    }
}
