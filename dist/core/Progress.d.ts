import { IDefault } from './Advertise';
interface ILinear {
    color?: 'primary' | 'secondary';
    valueBuffer?: number;
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}
interface ICircular {
    size?: string | number;
    color?: 'primary' | 'secondary' | 'inherit';
    variant?: 'determinate' | 'indeterminate' | 'static';
}
interface IProps extends IDefault {
    value?: number;
    linear?: boolean;
}
declare const Progress: ({ linear, style, margin, padding, ...otherProps }: IProps & ICircular & ILinear) => JSX.Element;
export default Progress;
