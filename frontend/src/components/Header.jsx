import React from "react";
import { Logo } from "../components/Logo";
import Nav from "../components/Nav";

function Header() {
    return (
        <div>
            <header className="bg-black sticky top-0 flex-wrap z-[26] mx-auto flex w-full items-center justify-between text-white  ">
                <div className="flex">
                <Logo />
                <h1 className="text-3xl font-serif bold"><br/>Mister Register : Gestionnaire des Stagiaires </h1>

                </div>

                <Nav />
            </header>
        </div>
    );
}

export default Header;
