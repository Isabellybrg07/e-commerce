import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import './index.css'
import classNames from "classnames";

type ButtonProps = {
    red1?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
} &ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
    red1= true,
    size = 'md',
    disabled,
    children,
    ...props
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
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;