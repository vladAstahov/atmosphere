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
    Reviews,
    Contacts,
    Footer
} from "resources/pages/Main/sections"

export const Main = () => {
    return <>
        <Header />
        <MainSection />
        <Ideas />
        <Reasons />
        <Rooms />
        <Booking />
        <Benefits />
        <Certificate />
        <Reviews />
        <Contacts />
        <Footer />
    </>
}