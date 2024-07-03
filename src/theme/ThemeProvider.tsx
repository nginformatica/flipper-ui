import React from 'react'
import type { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'

interface ThemeProviderProps {
    options?: ThemeOptions
    children: ReactNode
}

const ThemeProviderFlipper = ({
    options = {},
    children
}: ThemeProviderProps) => (
    <ThemeProvider theme={createTheme(options)}>{children}</ThemeProvider>
)

export default ThemeProviderFlipper
