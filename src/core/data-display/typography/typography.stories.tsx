import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'
import { theme } from '@/theme'

const { primary } = theme.colors

const meta: Meta<typeof Typography> = {
    title: 'DataDisplay/Typography',
    component: Typography,
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
                'overline'
            ],
            control: { type: 'radio' },
            description:
                'The variants based on the HTML tags. Must be ' +
                '`h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 |` ' +
                '` body2 | caption | button | overline`. ' +
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
