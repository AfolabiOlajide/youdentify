"use client";
import React from "react";
import Logo from "./_components/Logo";
import { Menu } from "./_components/Menu";
import ActionButtons from "./_components/ActionButton";

const NavBar = () => {
    const navbarClasses = `
        bg-white py-[1rem] sticky top-0 z-50 border-b border-gray-200
    `;

    return (
        <div className={navbarClasses}>
            <div className="flex items-center justify-between space-x-10  cont">
                <div className="flex items-center justify-center">
                    <Logo />
                    <Menu />
                </div>
                <ActionButtons />
            </div>
        </div>
    );
};

export default NavBar;
