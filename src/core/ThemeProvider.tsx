import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { ReactNode } from 'react'

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

const ThemeProvider: React.SFC<IProps> = ({ options = {}, children }) =>
    <MuiThemeProvider theme={ createMuiTheme(options) }>
        { children }
    </MuiThemeProvider>

export default ThemeProvider
