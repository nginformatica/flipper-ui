import { SFC } from 'react';
import { IDefault } from './Advertise';
import { IProps as ITextField } from './TextField';
interface IProps extends IDefault {
    type: 'date' | 'time' | 'datetime-local';
}
declare const DateTime: SFC<IProps & ITextField>;
export default DateTime;
