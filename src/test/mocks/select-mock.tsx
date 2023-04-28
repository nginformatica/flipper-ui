import ListItem from '@/core/data-display/list-item'
import Select, { SelectProps } from '@/core/inputs/select'
import * as React from 'react'

interface IProps {
    initialValue?: string
    selectProps?: Partial<SelectProps>
}

const Default = (props: IProps) => {
    const [select, setSelect] = React.useState(props.initialValue || '')

    function handleChange(
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) {
        setSelect(event.target.value)
    }

    const handleClear = () => {
        setSelect('')
    }

    return (
        <Select
            hasClear={props.selectProps?.hasClear}
            onClear={props.selectProps?.onClear ?? handleClear}
            value={select}
            data-testid='select-container'
            onChange={props.selectProps?.onChange ?? handleChange}>
            <ListItem value='0'>Option 0</ListItem>
            <ListItem value='1'>Option 1</ListItem>
            <ListItem value='2'>Option 2</ListItem>
        </Select>
    )
}

export default Default
