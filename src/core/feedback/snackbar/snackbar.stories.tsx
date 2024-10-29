import React, { useState } from 'react'
import type { SnackBarProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/core/inputs/button'
import Snackbar from '.'
import { StoriesWrapper } from './styles'

const meta: Meta<typeof Snackbar> = {
    title: 'Feedback/Snackbar',
    component: Snackbar,
    argTypes: {
        variant: {
            options: ['error', 'info', 'success', 'warning'],
            control: { type: 'radio' },
            description:
                'The snackbar variant. ' +
                'Must be `error | info | success | warning`. ' +
                'If not set, the default is "info"'
        },
        message: {
            control: 'text',
            description: 'The snackbar message'
        },
        anchorOrigin: {
            control: 'object',
            description: 'The snackbar anchor position'
        }
    }
}

export default meta

type Story = StoryObj<typeof Snackbar>

const SnackbarWrapper = (args: JSX.IntrinsicAttributes & SnackBarProps) => {
    const [open, setOpen] = useState(false)

    return (
        <StoriesWrapper>
            <Button
                color='primary'
                variant='contained'
                onClick={() => setOpen(!open)}>
                Open Snackbar
            </Button>
            <Snackbar {...args} open={open} onClose={() => setOpen(!open)} />
        </StoriesWrapper>
    )
}

export const snackbar: Story = {
    render: ({ ...args }) => {
        return <SnackbarWrapper {...args} />
    },
    args: {
        variant: 'info',
        message: 'In the town where I was born, Lived a man who sailed to sea',
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom'
        }
    }
}
