import React from "react"
import {
    Header,
    Main as MainSection,
    Ideas,
    Reasons,
    Rooms,
    Booking,
    Benefits,
    Certificate,
    Reviews
} from "resources/pages/Main/sections"

export const Main = () => {
    return <div>
        <Header />
        <MainSection />
        <Ideas />
        <Reasons />
        <Rooms />
        <Booking />
        <Benefits />
        <Certificate />
        <Reviews />
    </div>
}