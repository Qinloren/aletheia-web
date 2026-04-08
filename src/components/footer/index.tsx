import React, {type ReactNode} from "react";

import styles from "./index.module.scss";

interface VFooterProps {
    children?: ReactNode;
}

const VFooter: React.FC<VFooterProps> = ({ children }) => {
    return <div className={styles.footer}>{children}</div>
}

export default VFooter;