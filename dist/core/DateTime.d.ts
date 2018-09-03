import { IDefault } from './Advertise';
import { IProps as ITextField } from './TextField';
interface IProps extends IDefault {
    type: 'date' | 'time' | 'datetime-local';
}
declare const DateTime: ({ type, ...otherProps }: IProps & ITextField) => JSX.Element;
export default DateTime;
