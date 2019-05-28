import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { ReactNode, FC } from 'react'

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

const ThemeProvider: FC<IProps> = ({ options = {}, children }) =>
    <MuiThemeProvider theme={ createMuiTheme(options) }>
        { children }
    </MuiThemeProvider>

export default ThemeProvider
