import {  InputHTMLAttributes } from 'react';
import './index.css'

type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: string) => void;
    value?: string;
    label?: string;

}& InputHTMLAttributes<HTMLInputElement>;

const Input = ({
    placeholder,
    disabled,
    readOnly,
    onChange,
    value,
    label,
    className,
    ...props
}: InputProps) => {
  return (
    <label className={'yf-input ' + className}>
        <span>{label}</span>
        <input
        {...props}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(event) => onChange?.(event.target.value)}
            value={value}
        />
    </label>
  )
}

export default Input