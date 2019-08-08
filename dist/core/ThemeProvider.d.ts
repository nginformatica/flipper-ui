import { FC } from 'react';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
interface IProps {
    options?: ThemeOptions;
}
declare const ThemeProvider: FC<IProps>;
export default ThemeProvider;
