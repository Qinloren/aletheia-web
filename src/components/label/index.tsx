import "./index.module.scss";
import React, {type ReactNode} from "react";

interface VLabelProps extends React.HTMLAttributes<HTMLDivElement>{
    color?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}

const VLabel: React.FC<VLabelProps> = ({color, children, style}) => {
    return <div className={"v-label"} style={style}>
        <div className={"v-label-icon"} style={{
            background: color
        }}></div>
        <h4 className={"v-label-title"}>{children}</h4>
    </div>
}

export default VLabel;