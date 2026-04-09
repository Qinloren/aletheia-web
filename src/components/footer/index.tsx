import React, {type ReactNode} from "react";

import "./index.module.scss";

interface VFooterProps {
    children?: ReactNode;
}

const VFooter: React.FC<VFooterProps> = ({ children }) => {
    return <div className={"v-footer"}>{children}</div>
}

export default VFooter;