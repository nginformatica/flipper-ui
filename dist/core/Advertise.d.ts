import { FC, CSSProperties } from 'react';
export interface IDefault {
    style?: CSSProperties;
    className?: string;
    margin?: number | string;
    padding?: number | string;
    name?: string;
    id?: string;
}
interface IProps extends IDefault {
    comment: string;
    author: string;
    commentStyle?: object;
    authorStyle?: object;
}
declare const Advertise: FC<IProps>;
export default Advertise;
