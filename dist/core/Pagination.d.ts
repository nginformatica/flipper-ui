import { Component } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    pages?: number;
    active: number;
    onNext: () => {};
    onPrevious: () => {};
    onNavigate: (page: any) => {};
}
declare class Pagination extends Component<IProps> {
    render(): JSX.Element;
}
export default Pagination;
