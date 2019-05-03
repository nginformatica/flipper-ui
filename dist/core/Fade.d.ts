import { ReactElement, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactElement<{}>;
    in: boolean;
    timeout?: number | {
        enter?: number;
        exit?: number;
    };
}
declare const Fade: SFC<IProps>;
export default Fade;
