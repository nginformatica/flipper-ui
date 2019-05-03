import { ChangeEvent, Component, ReactNode } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    name: string;
    label?: ReactNode;
    color?: 'primary' | 'secondary' | 'default';
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    type?: 'switch' | 'checkbox';
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare class Checkbox extends Component<IProps, {}> {
    static defaultProps: {
        type: string;
    };
    renderCheckbox(): JSX.Element;
    renderSwitch(): JSX.Element;
    renderControl(): JSX.Element;
    render(): JSX.Element;
}
export default Checkbox;
