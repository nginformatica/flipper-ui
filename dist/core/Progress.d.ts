/// <reference types="react" />
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
interface IProps {
    value?: number;
    linear?: boolean;
    style?: object;
    margin?: number | string;
}
declare const Progress: ({ linear, style, margin, ...otherProps }: IProps & ICircular & ILinear) => JSX.Element;
export default Progress;
