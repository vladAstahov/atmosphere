import React from "react";
import {Routes, Route} from "react-router-dom";

function RouterView() {
    return <Routes>
        <Route path="/" element={<h1>Page</h1>}></Route>
    </Routes>
}

export default RouterView