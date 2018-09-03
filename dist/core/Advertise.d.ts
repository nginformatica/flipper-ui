export interface IDefault {
    style?: object;
    className?: string;
    margin?: number | string;
    padding?: number | string;
}
interface IProps extends IDefault {
    comment: string;
    author: string;
    commentStyle?: object;
    authorStyle?: object;
}
declare const Advertise: ({ comment, author, commentStyle, authorStyle, ...otherProps }: IProps) => JSX.Element;
export default Advertise;
