import { ChangeEvent } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    checked?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    value?: string;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const Radio: (props: IProps) => JSX.Element;
export default Radio;
