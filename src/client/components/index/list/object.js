/* TokyoHotel/trouvkach
 *
 * /src/client/components/objects/content.js - Objects component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";

export default function Object(props) {
    return (
        <div className={props.className} onClick={props.handleObject}>
            {props.value}
        </div>
    );
}
