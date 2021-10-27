import React from 'react'
import ThemeProvider from '../core/ThemeProvider'

const fonts =
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'

const Wrapper = ({ children }) => (
    <>
        <link
            href={ fonts }
            rel="stylesheet"
        />
        <ThemeProvider>{ children }</ThemeProvider>
    </>
)

export default Wrapper
