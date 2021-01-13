import React from "react";
import {Nav} from "../nav/Nav";
import './header.css'
import {Search} from "../search/Search";

export const Header = () => {

    return (
        <header>
            <h1>Jeux vidéos</h1>
            <Search />
            <Nav/>
        </header>
    )
}
