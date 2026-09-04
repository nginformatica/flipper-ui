import React from 'react'
import { Preview } from '@storybook/react'
import { muiThemeOptions, ThemeProviderFlipper } from '../src/theme'

const preview: Preview = {
    decorators: [
        Story => (
            <ThemeProviderFlipper options={muiThemeOptions}>
                <Story />
            </ThemeProviderFlipper>
        )
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
}

export default preview
