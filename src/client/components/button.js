/* TokyoHotel/trouvkach
 *
 * /src/client/components/button.js - button component
 *
 * coded by Valden
 * started at 10/09/2019
 */

import React from "react";

export default function Button(props) {
    return (
        <button
            className={props.className}
            type={"button"}
            onClick={props.handleButton}>
            {props.value}
        </button>
    );
}
