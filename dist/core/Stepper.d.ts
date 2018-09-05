import { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    active?: number;
    steps: string[];
    bottomLabel?: boolean;
}
declare class Stepper extends Component<IProps, {}> {
    static defaultProps: {
        active: number;
    };
    render(): JSX.Element;
}
export default Stepper;
