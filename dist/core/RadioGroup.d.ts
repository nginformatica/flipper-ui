import { ChangeEvent } from 'react';
interface IProps {
    title?: string;
    name: string;
    value?: string;
    options?: Array<{
        value: string;
        label?: string;
    }>;
    style?: object;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const RadioGroup: ({ options, style, title, value, onChange }: IProps) => JSX.Element;
export default RadioGroup;
