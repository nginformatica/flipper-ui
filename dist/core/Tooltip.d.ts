import { FC, ReactElement, CSSProperties } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    title: string;
    withWrapper?: boolean;
    wrapperStyle?: CSSProperties;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    children: ReactElement<{}>;
    enterDelay?: number;
}
declare const Tooltip: FC<IProps>;
export default Tooltip;
