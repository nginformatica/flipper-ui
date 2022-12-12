import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

interface ThemeProviderProps {
    options?: ThemeOptions
    children: React.ReactNode
}

const ThemeProvider = ({ options = {}, children }: ThemeProviderProps) => (
    <MuiThemeProvider theme={createMuiTheme(options)}>
        {children}
    </MuiThemeProvider>
)

export default ThemeProvider
