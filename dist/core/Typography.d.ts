/// <reference types="react" />
interface IProps {
    style?: object;
    margin?: number;
    noWrap?: boolean;
    variant?: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading' | 'body2' | 'body1' | 'caption' | 'button';
    color?: 'default' | 'error' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
declare const Typography: ({ style, margin, ...otherProps }: IProps) => JSX.Element;
export default Typography;
