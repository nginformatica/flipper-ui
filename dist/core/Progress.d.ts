import React from 'react';
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
declare const Progress: React.SFC<IProps & ICircular & ILinear>;
export default Progress;
