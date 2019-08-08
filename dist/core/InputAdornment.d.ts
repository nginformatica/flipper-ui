import { FC } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    position: 'start' | 'end';
}
declare const InputAdornment: FC<IProps>;
export default InputAdornment;
