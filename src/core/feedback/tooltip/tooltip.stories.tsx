import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '@/core/inputs/button'
import { Tooltip } from '.'

export default {
    title: 'Feedback/Tooltip',
    component: Tooltip
} as Meta<typeof Tooltip>

const Template: StoryFn<typeof Tooltip> = args => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Tooltip',
    children: <Button variant='outlined'>Simple tooltip</Button>
}

export const Positioned = () => (
    <>
        <Tooltip title='Tooltip' placement='left-start'>
            <Button variant='outlined' color='secondary' margin={12}>
                left-start
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='left'>
            <Button variant='outlined' color='primary' margin={12}>
                left
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='left-end'>
            <Button variant='outlined' margin={12}>
                left-end
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='bottom-start'>
            <Button variant='outlined' color='primary' margin={12}>
                bottom-start
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='bottom'>
            <Button variant='outlined' color='secondary' margin={12}>
                bottom
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='bottom-end'>
            <Button variant='outlined' color='primary' margin={12}>
                bottom-end
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='right-start'>
            <Button variant='outlined' margin={12}>
                right-start
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='right'>
            <Button variant='outlined' color='primary' margin={12}>
                right
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='right-end'>
            <Button variant='outlined' color='secondary' margin={12}>
                right-end
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='top-start'>
            <Button variant='outlined' margin={12}>
                top-start
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='top'>
            <Button variant='outlined' color='secondary' margin={12}>
                top
            </Button>
        </Tooltip>
        <Tooltip title='Tooltip' placement='top-end'>
            <Button variant='outlined' color='primary' margin={12}>
                top-end
            </Button>
        </Tooltip>
    </>
)

export const Disabled = Template.bind({})
Disabled.args = {
    title: 'Tooltip',
    children: (
        <span>
            <Button disabled variant='outlined'>
                I'm a disabled element
            </Button>
        </span>
    )
}
