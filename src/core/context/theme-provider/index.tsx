import {
    createTheme,
    ThemeOptions,
    ThemeProvider
} from '@material-ui/core/styles'
import React from 'react'

interface ThemeProviderProps {
    options?: ThemeOptions
    children: React.ReactNode
}

const ThemeProviderFlipper = ({
    options = {},
    children
}: ThemeProviderProps) => (
    <ThemeProvider theme={createTheme(options)}>{children}</ThemeProvider>
)

export default ThemeProviderFlipper
