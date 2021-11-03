import React, { useState, ChangeEvent } from 'react'
import { ComponentMeta } from '@storybook/react'
import Select from '../core/Select'
import ListItem from '../core/ListItem'

export default {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>

export const Default = () => {
    const [select, setSelect] = useState('3')

    function handleChange(event: ChangeEvent) {
        const target = event.target as HTMLInputElement
        setSelect(target.value)
    }

    return (
        <Select value={ select } onChange={ handleChange }>
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
