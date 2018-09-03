import React, { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    color?: 'default' | 'primary' | 'secondary' | 'error';
    counter: number | string;
    children: React.ReactNode;
    limit?: number;
}
declare class Badge extends Component<IProps> {
    static defaultProps: {
        color: string;
        limit: number;
    };
    render(): {} | null | undefined;
}
export default Badge;
