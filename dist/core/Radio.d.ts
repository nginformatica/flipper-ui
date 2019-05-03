import { ChangeEvent, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    checked?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    value?: string;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const Radio: SFC<IProps>;
export default Radio;
