/* becodeorg/trouvkach
 *
 * /src/client/components/map/markers.js - Map Markers Component
 *
 * coded by Flo
 * started at 11/09/2019
 */

import * as React from "react";

function Markers(props) {
    const atm = props.atm;
    const atmPos = atm.map(el => [el.latitude, el.longitude]);

    console.log(atmPos);
    return <h1>{atmPos}</h1>;
}

export default Markers;
