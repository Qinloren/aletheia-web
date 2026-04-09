import React, {type ReactNode} from "react";
import "./index.module.scss";
import mixins from "@/assets/styles/scss/mixin.module.scss";
import VLabel from "@/components/label";
import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    headerTitle?: string;
    headerIconColor?: string;
    header?: ReactNode;
    children?: ReactNode;
}

const VCard: React.FC<CardProps> = (props) => {
    const iconColor = props.headerIconColor ? props.headerIconColor : `linear-gradient(135deg, ${mixins.themeColorDark}, ${mixins.themeColorLight})`;
    return <div className={classNames({
        "v-card": true,
        [props.className as string]: !!props.className
    })}>
        {props.headerTitle ?
            <VLabel color={iconColor}>{props.headerTitle}</VLabel> :
            props.header
        }
        <div className={"v-card-content"}>{props.children}</div>
    </div>
}

export default VCard;