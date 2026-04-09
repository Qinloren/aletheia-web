import React, {type ReactNode} from "react";
import "./index.module.scss";
import classNames from "classnames";

type VButtonType = "default" | "primary" | "warning" | "error";
type VButtonSize = "default" | "small";

interface VButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    ref?: React.Ref<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
    type: VButtonType;
    htmlType?: "button" | "submit" | "reset";
    size?: VButtonSize;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
    round?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

const VButton: React.FC<VButtonProps> = (props:VButtonProps) => {
    const {
        className,
        type = "default",
        size = "default",
        icon,
        iconPosition = "start",
        disabled = false,
        children,
        onClick,
        onBlur,
        onFocus,
        htmlType = "button",
        ref,
        ...others
    } = props;

    const sizeMap: Record<VButtonSize, string> = {
        default: "",
        small: "small",
    }
    const sizeClassName = sizeMap[size];
    const cls = classNames({
        "v-button": true,
        [`v-button-${type}`]: type,
        [`v-button-${sizeClassName}`]: sizeClassName,
        [className as string]: !!className
    })
    const isDisabled = disabled;
    const isIconOnly = !children && (icon);
    const iconNode = icon ? icon : null;
    const renderContent = () => {
        if (isIconOnly) {
            return iconNode;
        }
        if (iconNode && children) {
            if (iconPosition === "end") {
                return (
                    <>
                        <span>{children}</span>
                        {iconNode}
                    </>
                )
            } else {
                return (
                    <>
                        {iconNode}
                        <span>{children}</span>
                    </>
                )
            }
         }
        return children;
    }
    return <button ref={ref} className={cls} type={htmlType} disabled={isDisabled} onClick={onClick} onBlur={onBlur} onFocus={onFocus} {...others}>
        { renderContent() }
    </button>
}

VButton.displayName = "VButton";

export default VButton;