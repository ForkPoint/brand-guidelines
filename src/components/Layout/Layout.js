import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SMain } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <SMain>{children}</SMain>
        </>
    );
};

export default Layout;
