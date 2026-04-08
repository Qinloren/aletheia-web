import React from "react";
import { Outlet } from "react-router-dom";
import VHeader from "@/components/header";
import VFooter from "@/components/footer";
import styles from "./index.module.scss";

const VBasicLayout: React.FC = () => {
    return (
        <>
            <VHeader>This is Header.</VHeader>
            <div className={styles.content}>
                <Outlet />
            </div>
            <VFooter>This is Footer.</VFooter>
        </>
    )
}
export default VBasicLayout;