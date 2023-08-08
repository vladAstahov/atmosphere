import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "resources/pages";

function RouterView() {
    return <Routes>
        <Route path="/" element={<Main />}></Route>
    </Routes>
}

export default RouterView