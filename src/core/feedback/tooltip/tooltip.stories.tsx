import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/core/inputs/button'
import Tooltip from '.'
import { StoriesWrapper } from './styles'

const meta: Meta<typeof Tooltip> = {
    title: 'Feedback/Tooltip',
    component: Tooltip,
    argTypes: {
        title: {
            control: 'text',
            description: 'The tooltip content'
        },
        placement: {
            options: [
                'bottom-start',
                'bottom',
                'left-end',
                'left-start',
                'left',
                'right-end',
                'right-start',
                'right',
                'top-end',
                'top-start',
                'top'
            ],
            control: { type: 'radio' },
            description:
                'The tooltip placement. Must be ' +
                '`bottom-end | bottom-start | bottom | left-end | left-start | left |` \n' +
                '` right-end | right-start | right | top-end | top-start | top`. ' +
                'If not set, the default is "bottom"'
        }
    }
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const tooltip: Story = {
    render: ({ ...args }) => {
        return (
            <StoriesWrapper>
                <Tooltip {...args}>
                    <span>
                        <Button variant='outlined' color='primary'>
                            Hover the Button!
                        </Button>
                    </span>
                </Tooltip>
            </StoriesWrapper>
        )
    },
    args: {
        title: "Here's the Tooltip",
        placement: 'bottom'
    }
}
