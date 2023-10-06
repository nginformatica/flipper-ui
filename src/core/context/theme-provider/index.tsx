import {
    MuiThemeProvider,
    ThemeOptions,
    createTheme
} from '@material-ui/core/styles'
import React from 'react'

interface ThemeProviderProps {
    options?: ThemeOptions
    children: React.ReactNode
}

const ThemeProvider = ({ options = {}, children }: ThemeProviderProps) => (
    <MuiThemeProvider theme={createTheme(options)}>{children}</MuiThemeProvider>
)

export default ThemeProvider
