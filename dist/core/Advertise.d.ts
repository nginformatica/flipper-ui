/// <reference types="react" />
interface IProps {
    comment: string;
    author: string;
    style?: object;
    commentStyle?: object;
    authorStyle?: object;
}
declare const Advertise: ({ comment, author, commentStyle, authorStyle, ...otherProps }: IProps) => JSX.Element;
export default Advertise;
