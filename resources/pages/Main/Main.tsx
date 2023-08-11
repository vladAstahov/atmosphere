import React from "react"
import { Header, Main as MainSection, Ideas, Reasons, Rooms } from "resources/pages/Main/sections"

export const Main = () => {
    return <div>
        <Header />
        <MainSection />
        <Ideas />
        <Reasons />
        <Rooms />
    </div>
}