import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'

interface IProps {
    options?: {
        palette: {
            primary?: {
                main: string
            },
            secondary?: {
                main: string
            }
        }
    }
}

const ThemeProvider: FC<IProps> = ({ options = {}, children }) =>
    <MuiThemeProvider theme={ createMuiTheme(options) }>
        { children }
    </MuiThemeProvider>

export default ThemeProvider
