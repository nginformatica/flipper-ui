import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Link from '@/core/navigation/Link'
import Breadcrumb from '.'

export default {
    title: 'Navigation/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Breadcrumb>

const Template: StoryFn<typeof Breadcrumb> = args => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = {
    children: (
        <Breadcrumb>
            <Link color='inherit' href='#'>
                Flipper-ui
            </Link>
            <Link color='inherit' href='#'>
                Breadcrumb
            </Link>
        </Breadcrumb>
    )
}
