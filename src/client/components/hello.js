/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 * Refactored by Valden at 10/09/2019
 */

import * as React from "react";
import Index from "./components/index/main";
import List from "./components/list/main";
import Display from "./components/display/main";

const HelloWorld = () => (
    <div>
        <h1>{"Hello, world!"}</h1>
        <hr />
        <small>{"becode/trouvkach"}</small>
        <Index />
        <List />
        <Display />
    </div>
);

export default HelloWorld;
