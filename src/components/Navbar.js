import React from "react"
import nav_img from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={nav_img} className="nav--logo" />
        </nav>
    )
}