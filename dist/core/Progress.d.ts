import { FC } from 'react';
import { IDefault } from './Advertise';
interface ILinear {
    color?: 'primary' | 'secondary';
    valueBuffer?: number;
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    classes?: {
        root?: string;
        colorPrimary?: string;
        barColorPrimary?: string;
        barColorSecondary?: string;
    };
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
declare const Progress: FC<IProps & ICircular & ILinear>;
export default Progress;
