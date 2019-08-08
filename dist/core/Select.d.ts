import { ChangeEvent, FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    autoWidth?: boolean;
    value?: string | number;
    multiple?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    onClose?: () => void;
    onChange?: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}
declare const Select: FC<IProps>;
export default Select;
