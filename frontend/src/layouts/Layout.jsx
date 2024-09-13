import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../index.css'
import Header from "../components/Header";



function Layout() {
    return (
        <>
            <Header/>
            <main className='container'>
                <Outlet />
            </main >
            <footer> </footer>
        </>
    );
}

export default Layout;
