import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'
import { theme } from '@/theme'

const { primary } = theme.colors

const meta: Meta<typeof Typography> = {
    title: 'DataDisplay/Typography',
    component: Typography,
    parameters: {
        docs: {
            description: {
                component:
                    'Besides the MUI variants, Typography ships the NG size ' +
                    'tokens `micro` (10px), `footnote` (11px), `dense` (13px) ' +
                    'and `display` (28px).\n\n' +
                    'These tokens live in the MUI theme, so the app has to ' +
                    'pass `muiThemeOptions` to the provider for the theme to ' +
                    'carry them:\n\n' +
                    '```tsx\n' +
                    "import { muiThemeOptions, ThemeProviderFlipper } from 'flipper-ui/theme'\n\n" +
                    '<ThemeProviderFlipper options={muiThemeOptions}>\n' +
                    '    <App />\n' +
                    '</ThemeProviderFlipper>\n' +
                    '```\n\n' +
                    '`ThemeProviderFlipper` without `options` builds the ' +
                    'default MUI theme, which does not carry the tokens. ' +
                    'Typography then falls back to their default values, so ' +
                    'the size is never lost. The fallback is a safety net, ' +
                    'not the contract: a custom theme can only restyle a ' +
                    'token it declares, so merge `muiThemeOptions` instead of ' +
                    'replacing it.'
            }
        }
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'The content'
        },
        variant: {
            options: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'subtitle1',
                'subtitle2',
                'body1',
                'body2',
                'caption',
                'button',
                'overline',
                'micro',
                'footnote',
                'dense',
                'display'
            ],
            control: { type: 'radio' },
            description:
                'The variants based on the HTML tags. Must be ' +
                '`h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 |` ' +
                '` body2 | caption | button | overline`. ' +
                'The NG size tokens are ' +
                '`micro` (10px), `footnote` (11px), `dense` (13px) and ' +
                '`display` (28px), and they come from the theme built with ' +
                '`muiThemeOptions`. ' +
                'If not set, the default is `body2`.'
        },
        color: {
            options: [
                'default',
                'primary',
                'secondary',
                'error',
                'textPrimary',
                'textSecondary',
                'textDisabled'
            ],
            control: { type: 'radio' },
            description:
                'The text color. Must be ' +
                '`default | primary | secondary | error |` ' +
                '`textPrimary | textSecondary | textDisabled.` ' +
                'If not set, the default is `default`.'
        },
        align: {
            options: ['inherit', 'center', 'right', 'left', 'justify'],
            control: { type: 'radio' },
            description:
                'The text alignment. Must be ' +
                '`inherit | center | right | left | justify.` ' +
                'If not set, the default is `left`.'
        },
        margin: {
            control: 'text',
            description: 'The text margin'
        },
        padding: {
            control: 'text',
            description: 'The text padding'
        },
        style: {
            control: 'object',
            description: 'The text style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Typography>

export const typography: Story = {
    render: ({ ...args }) => {
        return (
            <>
                <Typography
                    variant='subtitle2'
                    color='primary'
                    align='center'
                    width='70%'
                    margin='0 auto 48px'>
                    Como um utilitário CSS, o componente Typography também
                    suporta todas as propriedades{' '}
                    <a
                        target='_blank'
                        href='https://mui.com/system/properties/'
                        style={{
                            color: primary.light,
                            textDecoration: 'none'
                        }}>
                        system
                    </a>
                    . Você pode usá-las como props diretamente no componente.
                </Typography>

                <Typography {...args} />
            </>
        )
    },
    args: {
        children: 'This is Typography component text!',
        variant: 'body1',
        color: 'default',
        align: 'left',
        margin: '0px',
        padding: '0px',
        style: {}
    }
}
