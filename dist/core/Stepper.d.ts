import { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    active?: number;
    steps: Array<string | TStep>;
    bottomLabel?: boolean;
    orientation?: 'horizontal' | 'vertical';
}
declare type TStep = {
    label: JSX.Element | string;
    icon: JSX.Element | ((active?: boolean) => JSX.Element);
};
declare class Stepper extends Component<IProps, {}> {
    static defaultProps: {
        active: number;
    };
    render(): JSX.Element;
}
export default Stepper;
