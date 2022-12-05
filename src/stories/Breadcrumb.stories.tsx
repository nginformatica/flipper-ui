import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from '../core/Link'
import Breadcrumb from '../core/Breadcrumb'

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = args => (
    <Breadcrumb {...args} />
)

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
