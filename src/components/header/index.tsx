import React, {type ReactNode} from "react";

import styles from "./index.module.scss";

interface VHeaderProps {
    children?: ReactNode;
}

const VHeader: React.FC<VHeaderProps> = ({ children }) => {
    return <div className={styles.header}>{children}</div>
}

export default VHeader;