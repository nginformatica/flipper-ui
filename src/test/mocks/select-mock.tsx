import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import MuiMenuItem from '@mui/material/MenuItem'
import type { ISelectProps } from '@/core/inputs/select'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@/core/inputs/select'

interface IProps {
    initialValue?: string
    selectProps?: Partial<ISelectProps>
}

const Default = (props: IProps) => {
    const [select, setSelect] = useState(props.initialValue || '')

    function handleChange(
        event:
            | ChangeEvent<HTMLSelectElement | HTMLInputElement>
            | SelectChangeEvent<string>
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
            <MuiMenuItem value='0'>Option 0</MuiMenuItem>
            <MuiMenuItem value='1'>Option 1</MuiMenuItem>
            <MuiMenuItem value='2'>Option 2</MuiMenuItem>
        </Select>
    )
}

export default Default
