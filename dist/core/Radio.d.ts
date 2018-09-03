import { ChangeEvent } from 'react';
interface IProps {
    checked?: boolean;
    color?: 'primary' | 'secondary' | 'default';
    value?: string;
    style?: object;
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare const Radio: (props: IProps) => JSX.Element;
export default Radio;
