import React from "react";
import { Outlet } from "react-router-dom";
import VHeader from "@/components/header";
import VFooter from "@/components/footer";
import "./index.module.scss";

const VBasicLayout: React.FC = () => {
    return (
        <>
            <VHeader title="Vortexia"/>
            <div className={"content"}>
                <div className={"content-wrap"}>
                    <Outlet />
                </div>
            </div>
            <VFooter>This is Footer.</VFooter>
        </>
    )
}
export default VBasicLayout;