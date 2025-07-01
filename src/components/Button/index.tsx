import type { PropsWithChildren } from "react";
import './index.css'
import classNames from "classnames";

type ButtonProps = {
    red1?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}

const Button = ({
    red1= true,
    size = 'md',
    disabled,
    children
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames(
        'btn',
        size,
        {
            red1: red1 === true,
            white: red1 !== true,
            disabled
        }
    )

    return (
        <button
            className={classes}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;