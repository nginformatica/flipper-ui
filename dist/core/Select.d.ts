import React, { ChangeEvent } from 'react';
interface IProps {
    autoWidth?: boolean;
    children?: React.ReactNode;
    value?: string | number;
    multiple?: boolean;
    onClose?: () => void;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const Select: ({ children, ...otherProps }: IProps) => JSX.Element;
export default Select;
