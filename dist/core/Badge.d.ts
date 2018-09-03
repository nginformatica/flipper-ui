import React, { Component } from 'react';
interface IProps {
    style?: object;
    color?: 'default' | 'primary' | 'secondary' | 'error';
    counter: number | string;
    children: React.ReactNode;
    limit?: number;
}
declare class Badge extends Component<IProps> {
    static defaultProps: {
        color: string;
    };
    render(): {} | null | undefined;
}
export default Badge;
