/* TokyoHotel/trouvkach
 *
 * /src/client/components/list/main.js - Main List component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";
import Objects from "./object";

const List = props => {
    if (props.viewList) {
        return (
            <div>
                <p>
                    <span>{"Bonjour, je suis la liste !"}</span>
                </p>
                {props.atmArray.map(element => (
                    <Objects
                        key={element._id}
                        className={"list-objects"}
                        value={`${element.address}`}
                        handleObject={props.viewContentUpdate}
                        coords={element.position}
                    />
                ))}
            </div>
        );
    }
    return null;
};

export default List;
