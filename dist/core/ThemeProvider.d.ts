import { ReactNode, SFC } from 'react';
interface IProps {
    options?: {
        palette: {
            primary?: {
                main: string;
            };
            secondary?: {
                main: string;
            };
        };
    };
    children?: ReactNode;
}
declare const ThemeProvider: SFC<IProps>;
export default ThemeProvider;
