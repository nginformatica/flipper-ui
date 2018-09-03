import { ChangeEvent, Component } from 'react';
interface IProps {
    name: string;
    label?: string;
    style?: object;
    color?: 'primary' | 'secondary' | 'default';
    disabled?: boolean;
    checked?: boolean;
    type?: 'switch' | 'checkbox';
    onChange?: (event: ChangeEvent<HTMLElement>) => void;
}
declare class Checkbox extends Component<IProps> {
    static defaultProps: {
        type: string;
    };
    renderCheckbox(): JSX.Element;
    renderSwitch(): JSX.Element;
    renderControl(): JSX.Element;
    render(): JSX.Element;
}
export default Checkbox;
