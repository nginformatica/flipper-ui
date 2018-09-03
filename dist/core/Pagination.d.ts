import { Component } from 'react';
interface IProps {
    pages?: number;
    active: number;
    style?: object;
    onNext: () => {};
    onPrevious: () => {};
    onNavigate: (page: any) => {};
}
declare class Pagination extends Component<IProps> {
    render(): JSX.Element;
}
export default Pagination;
