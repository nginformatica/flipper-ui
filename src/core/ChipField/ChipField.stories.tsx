import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import ChipField from '.'

export default {
    title: 'ChipField',
    component: ChipField
} as Meta<typeof ChipField>

const Template: StoryFn<typeof ChipField> = args => {
    const [state, setState] = useState([{ value: 'alpha' }])

    const handleRemove = (value: string) =>
        setState(state.filter(item => item.value !== value))

    const handleAdd = (item: string) => setState([{ value: item }, ...state])

    return (
        <ChipField
            {...args}
            onDelete={handleRemove}
            values={state}
            onAdd={handleAdd}
        />
    )
}

export const Default = Template.bind({})

Default.args = {
    variant: 'outlined',
    label: 'chips'
}
