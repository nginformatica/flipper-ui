import { Component } from 'react';
interface IProps {
    active?: number;
    steps: string[];
    style?: object;
    bottomLabel?: boolean;
}
declare class Stepper extends Component<IProps> {
    static defaultProps: {
        active: number;
    };
    render(): JSX.Element;
}
export default Stepper;
