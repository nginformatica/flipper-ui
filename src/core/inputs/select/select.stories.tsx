import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { Meta } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import Select from '.'

export default {
    title: 'Inputs/Select',
    component: Select
} as Meta<typeof Select>

export const Default = () => {
    const [select, setSelect] = useState('3')

    function handleChange(
        event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) {
        setSelect(event.target.value)
    }

    return (
        <Select value={select} onChange={handleChange}>
            <ListItem value='0'>Option 0</ListItem>
            <ListItem value='1'>Option 1</ListItem>
            <ListItem value='2'>Option 2</ListItem>
            <ListItem value='3'>Option 3</ListItem>
            <ListItem value='4'>Option 4</ListItem>
            <ListItem value='5'>Option 5</ListItem>
            <ListItem value='6'>Option 6</ListItem>
            <ListItem value='7'>Option 7</ListItem>
        </Select>
    )
}

export const WithClear = () => {
    const [select, setSelect] = useState('3')

    function handleChange(
        event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) {
        setSelect(event.target.value)
    }

    const handleClear = () => {
        setSelect('')
    }

    return (
        <Select
            hasClear
            value={select}
            onClear={handleClear}
            onChange={handleChange}>
            <ListItem value='' />
            <ListItem value='0'>Option 0</ListItem>
            <ListItem value='1'>Option 1</ListItem>
            <ListItem value='2'>Option 2</ListItem>
            <ListItem value='3'>Option 3</ListItem>
            <ListItem value='4'>Option 4</ListItem>
            <ListItem value='5'>Option 5</ListItem>
            <ListItem value='6'>Option 6</ListItem>
            <ListItem value='7'>Option 7</ListItem>
        </Select>
    )
}
