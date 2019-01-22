import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { ReactNode, SFC } from 'react'

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
    },
    children?: ReactNode
}

const ThemeProvider: SFC<IProps> = ({ options = {}, children }) =>
    <MuiThemeProvider theme={ createMuiTheme(options) }>
        { children }
    </MuiThemeProvider>

export default ThemeProvider
