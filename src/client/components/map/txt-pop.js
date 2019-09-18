/* becodeorg/trouvkach
 *
 * /src/client/components/map/componentalacon.js - Only for test Component
 *
 * coded by Flo
 * started at 12/09/2019
 */

import * as React from "react";

function PopUpTxt(props) {
    const matchingBank = props.banks.find(bank => {
        if (props.atm.bank !== null) {
            return bank._id === props.atm.bank;
        }
        return null;
    });

    const bankAtm = matchingBank ? matchingBank.name : "Banque inconnue";

    return <div>{bankAtm}</div>;
}

export default PopUpTxt;
