import { Ref, SFC, CSSProperties } from 'react';
export interface IDefault {
    style?: CSSProperties;
    className?: string;
    margin?: number | string;
    padding?: number | string;
    name?: string;
    id?: string;
    ref?: Ref<unknown>;
}
interface IProps extends IDefault {
    comment: string;
    author: string;
    commentStyle?: object;
    authorStyle?: object;
}
declare const Advertise: SFC<IProps>;
export default Advertise;
