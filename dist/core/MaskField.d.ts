import { Component } from 'react';
import TextField, { IProps } from './TextField';
interface IMaskProps {
    mask?: string;
    type?: 'text' | 'tel' | 'password';
    decimalSeparator?: string;
    format?: string;
    decimalScale?: number;
    thousandSeparator?: boolean | string;
    fixedDecimalScale?: boolean;
    customInput?: typeof TextField;
}
declare class MaskField extends Component<IProps & IMaskProps> {
    render(): JSX.Element;
}
export default MaskField;
