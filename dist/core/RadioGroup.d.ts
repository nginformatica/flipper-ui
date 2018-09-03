import { ChangeEvent } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    title?: string;
    name: string;
    value?: string;
    options?: Array<{
        value: string;
        label?: string;
    }>;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const RadioGroup: ({ options, className, style, title, value, onChange }: IProps) => JSX.Element;
export default RadioGroup;
