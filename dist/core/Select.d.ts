import { ChangeEvent, ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    autoWidth?: boolean;
    children?: ReactNode;
    value?: string | number;
    multiple?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    onClose?: () => void;
    onChange?: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}
declare const Select: SFC<IProps>;
export default Select;
