import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
export { StylesProvider } from '@material-ui/core/styles'


interface IProps {
    options?: ThemeOptions
}

const ThemeProvider: FC<IProps> = ({ options = {}, children }) =>
    <MuiThemeProvider theme={ createMuiTheme(options) }>
        { children }
    </MuiThemeProvider>

export default ThemeProvider
