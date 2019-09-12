/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";
import Objects from "./object";
import axios from "axios";

const List = props => {
    const [atmData, setData] = React.useState([]);
    // const classes = useStyles();

    const getAtmData = () => {
        axios
            .get("http://localhost/api/terminal")
            .then(response => {
                setData(Object.values(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (props.viewList) {
        getAtmData();
        return (
            <div>
                <p>
                    <span>{"Bonjour, je suis la liste !"}</span>
                </p>
                {atmData.map((element, index) => (
                    <Objects
                        key={index.toString()}
                        className={"list-objects"}
                        value={`${element.address}`}
                        handleObject={props.viewContentUpdate}
                    />
                ))}
            </div>
        );
    }
    return null;
};

export default List;
