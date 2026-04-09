import "./index.module.scss";
import React from "react";
import classNames from "classnames";
import chroma from "chroma-js";

/**
 * 标签类型
 */
export type VTagType = "default" | "warning" | "success" | "error" | "custom";

/**
 * 标签属性
 */
interface VTagProps extends React.HTMLAttributes<HTMLSpanElement> {

    /**
     * class列表字符串
     */
    className?: string;

    /**
     * 标签样式字符串
     */
    style?: React.CSSProperties;

    /**
     * 标签类型
     */
    type?: VTagType;

    /**
     * 标签颜色
     */
    color?: string;

    /**
     * 标签内容
     */
    children?: string;
}

const VTag: React.FC<VTagProps> = (props) => {
    const {
        className,
        style,
        type = "default",
        color,
        children,
        ...other
    } = props;

    const cls = classNames({
        "v-tag": true,
        [`v-tag-${type}`]: type,
        [className as string]: !!className,
    })
    if (type === "custom" && !!color) {
        const backgroundColor = chroma(color).alpha(0.2).hex("rgba")
        const borderColor = chroma(color).alpha(0.2).hex("rgba")
        const iStyle: React.CSSProperties = {};
        iStyle.color = color;
        iStyle.backgroundColor = backgroundColor;
        iStyle.borderColor = borderColor;
    }
    return <span className={cls} style={style} {...other}>{children}</span>
}

VTag.displayName = "VTag";

export default VTag;