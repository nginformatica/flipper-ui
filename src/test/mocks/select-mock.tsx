import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { ISelectProps } from '@/core/inputs/select'
import ListItem from '@/core/data-display/list-item'
import Select from '@/core/inputs/select'

interface IProps {
    initialValue?: string
    selectProps?: Partial<ISelectProps>
}

const Default = (props: IProps) => {
    const [select, setSelect] = useState(props.initialValue || '')

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
            hasClear={props.selectProps?.hasClear}
            value={select}
            data-testid='select-container'
            onClear={props.selectProps?.onClear ?? handleClear}
            onChange={props.selectProps?.onChange ?? handleChange}>
            <ListItem value='0'>Option 0</ListItem>
            <ListItem value='1'>Option 1</ListItem>
            <ListItem value='2'>Option 2</ListItem>
        </Select>
    )
}

export default Default
