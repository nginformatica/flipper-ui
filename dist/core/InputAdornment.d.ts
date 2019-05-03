import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    position: 'start' | 'end';
    children: ReactNode;
}
declare const InputAdornment: SFC<IProps>;
export default InputAdornment;
