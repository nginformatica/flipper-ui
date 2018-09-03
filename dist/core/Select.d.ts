import React, { ChangeEvent } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    autoWidth?: boolean;
    children?: React.ReactNode;
    value?: string | number;
    multiple?: boolean;
    onClose?: () => void;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const Select: ({ children, style, margin, padding, ...otherProps }: IProps) => JSX.Element;
export default Select;
