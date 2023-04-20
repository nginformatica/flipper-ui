import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import Select from '.'
import ListItem from '../ListItem'

export default {
    title: 'Select',
    component: Select
} as Meta<typeof Select>

export const Default = () => {
    const [select, setSelect] = useState('3')

    function handleChange(value: string) {
        setSelect(value)
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

    function handleChange(value: string) {
        setSelect(value)
    }

    const handleClear = () => {
        setSelect('')
    }

    return (
        <Select
            hasClear={true}
            onClear={handleClear}
            value={select}
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
