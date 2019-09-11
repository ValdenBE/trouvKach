/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Objects from "./object";
import MainMap from "../map/main-map";
import axios from "axios";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.getAtmData();
        this.state = {
            isLoading: false,
            atmData: [],
        };
    }

    getAtmData() {
        axios
            .get("http://localhost/api/terminal")
            .then(response => {
                this.setState({
                    atmData: [
                        ...this.state.atmData,
                        ...Object.values(response.data),
                    ],
                });
                this.setState({isLoading: false});
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
                    {this.state.atmData.map((element, index) => (
                        <Objects
                            key={index.toString()}
                            className={"mabite"}
                            value={`${element.address}`}
                            handleObject={this.props.viewContentUpdate}
                        />
                    ))}
                </div>
            );
        }

        return null;
    }
}
