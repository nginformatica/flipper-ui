import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

interface ThemeProviderProps {
    options?: ThemeOptions
}

const ThemeProvider: FC<ThemeProviderProps> = ({ options = {}, children }) => (
    <MuiThemeProvider theme={createMuiTheme(options)}>
        {children}
    </MuiThemeProvider>
)

export default ThemeProvider
