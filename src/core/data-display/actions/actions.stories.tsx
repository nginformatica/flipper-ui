import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Actions from '.'

const meta: Meta<typeof Actions> = {
    title: 'DataDisplay/Actions',
    component: Actions,
    argTypes: {
        names: {
            table: {
                disable: true
            }
        },
        readonly: {
            table: {
                disable: true
            }
        },

        prefix: {
            table: {
                disable: true
            }
        },
        align: {
            options: ['flex-end', 'flex-start', 'center'],
            control: { type: 'radio' },
            description:
                "The buttons position. Must be `'flex-end' | 'flex-start' | 'center'`"
        },
        buttons: {
            control: false,
            description:
                "The buttons inner text. Must be `Array<'confirm' | 'cancel'>`" +
                "If not informed, it will be used the default 'Cancelar' and 'Confirmar'"
        },
        labels: {
            cancel: {
                control: 'text'
            },
            confirm: {
                control: 'text'
            },
            description:
                'The buttons inner label. Must be and object with the cancel and confirm keys.'
        },
        padding: {
            control: 'text',
            description: 'The buttons padding'
        },
        margin: {
            control: 'text',
            description: 'The buttons margin.'
        },
        actionButtonColor: {
            options: ['inherit', 'primary', 'secondary', 'default', undefined],
            control: { type: 'radio' },
            description:
                'The "Confirmar" button color.' +
                'Must be `"inherit" | "primary" | "secondary" | "default" | undefined`' +
                'If not set, the default is "secondary"'
        },
        disabled: {
            control: 'boolean',
            description: 'If `true`, the buttons are disabled.'
        },
        disabledCancel: {
            control: 'boolean',
            description: 'If `true`, the Cancel button is disabled.'
        },
        disabledConfirm: {
            control: 'boolean',
            description: 'If `true`, the Confirm button is disabled.'
        },
        onCancel: {
            control: false,
            description: 'The onCancel function, must be `() => void | boolean`'
        },
        onConfirm: {
            control: false,
            description: 'The onConfirm function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Actions>

export const actions: Story = {
    render: ({ ...args }) => {
        return <Actions {...args} />
    },
    args: {
        align: 'flex-end',
        margin: '',
        padding: '',
        buttons: ['cancel', 'confirm'],
        labels: { cancel: 'Cancelar', confirm: 'Confirmar' },
        actionButtonColor: 'primary',
        disabled: false,
        disabledCancel: false,
        disabledConfirm: false,
        onCancel: () => alert('Cancelar'),
        onConfirm: () => alert('Confirmar')
    }
}
