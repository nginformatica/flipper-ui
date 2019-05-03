import { SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    title: string;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    children: JSX.Element;
    enterDelay?: number;
}
declare const Tooltip: SFC<IProps>;
export default Tooltip;
