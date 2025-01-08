import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import type { ISelectProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import Select from '.'

const meta: Meta<typeof Select> = {
    title: 'Inputs/Select',
    component: Select,
    argTypes: {
        value: {
            control: 'text',
            description: 'The select value'
        },
        variant: {
            options: ['standard', 'outlined', 'filled'],
            control: { type: 'radio' },
            description:
                'The select variant. Must be ' +
                '`standard | outlined | filled`. ' +
                'If not set, the default is "outlined"'
        },
        hasClear: {
            control: 'boolean',
            description: 'To render the clear button on the select'
        },
        disabled: {
            control: 'boolean',
            description: 'To set the disabled state on the select'
        },
        margin: {
            control: 'text',
            description: 'The select margin'
        },
        padding: {
            control: 'text',
            description: 'The select padding'
        },
        style: {
            control: 'object',
            description: 'The select style'
        },
        onClear: {
            control: false,
            description: 'The onClear function, must be `() => void`'
        },
        onChange: {
            control: false,
            description: 'The onChange function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Select>

const SelectWrapper = (args: JSX.IntrinsicAttributes & ISelectProps) => {
    const [select, setSelect] = useState('')

    const handleChange = (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        setSelect(e.target.value)
    }

    const handleClear = () => {
        setSelect('')
    }

    return (
        <FormControl fullWidth size='small'>
            <InputLabel>Label</InputLabel>
            <Select
                {...args}
                autoWidth
                label='Label'
                value={select}
                onClear={handleClear}
                onChange={handleChange}>
                <ListItem value='0'>Option 0</ListItem>
                <ListItem value='1'>Option 1</ListItem>
                <ListItem value='2'>Option 2</ListItem>
                <ListItem value='3'>Option 3</ListItem>
                <ListItem value='4'>Option 4</ListItem>
                <ListItem value='5'>Option 5</ListItem>
                <ListItem value='6'>Option 6</ListItem>
                <ListItem value='7'>Option 7</ListItem>
            </Select>
        </FormControl>
    )
}

export const select: Story = {
    render: ({ ...args }) => {
        return <SelectWrapper {...args} />
    },
    args: {
        value: '0',
        variant: 'outlined',
        hasClear: false,
        disabled: false,
        margin: '',
        padding: '',
        style: {},
        onChange: () => null
    }
}
