/* TokyoHotel/trouvkach
 *
 * /src/client/components/index/main.js - Main Index component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React, {Component} from "react";
import Button from "../button";
import Content from "./content";
import MainList from "../list/main";

export default class main extends Component {
    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            viewList: false,
        };
    }

    onStart() {
        this.setState({viewList: true});
    }
    render() {
        return (
            <div>
                <MainList view={this.state.viewList} />
                <Content />
                <Button
                    handleButton={this.onStart}
                    value={"START"}
                    className={"index-btn"}
                />
            </div>
        );
    }
}
