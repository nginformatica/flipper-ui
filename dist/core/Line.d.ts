import { IDefault } from './Advertise';
interface IProps extends IDefault {
    primary?: boolean;
}
declare const Line: ({ primary, padding, margin, style }: IProps) => JSX.Element;
export default Line;
