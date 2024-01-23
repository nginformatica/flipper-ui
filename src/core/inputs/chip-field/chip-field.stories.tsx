import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { ChipField } from '.'

export default {
    title: 'Inputs/ChipField',
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
            values={state}
            onDelete={handleRemove}
            onAdd={handleAdd}
        />
    )
}

export const Default = Template.bind({})

Default.args = {
    variant: 'outlined',
    label: 'chips'
}
