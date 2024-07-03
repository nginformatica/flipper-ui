import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import NothingFound from '.'

const meta: Meta<typeof NothingFound> = {
    title: 'Feedback/Nothing Found',
    component: NothingFound,
    argTypes: {
        customText: {
            control: 'text',
            description: 'The custom text.'
        },
        buttonLabel: {
            control: 'text',
            description: 'The button label.'
        },
        searchText: {
            control: 'text',
            description: 'The search text.'
        },
        readonly: {
            control: 'boolean',
            description: 'To set the readonly.'
        }
    }
}

export default meta

type Story = StoryObj<typeof NothingFound>

export const nothingFound: Story = {
    render: ({ ...args }) => {
        return <NothingFound {...args} />
    },
    args: {
        show: true,
        customText: 'Ops! Não foi encontrado nada.',
        buttonLabel: '',
        searchText: '',
        readonly: false
    }
}
