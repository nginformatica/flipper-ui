import * as React from 'react'
import RadioGroup, { RadioGroupProps } from '@/core/RadioGroup'

interface IProps {
    radioGroupProps?: Partial<RadioGroupProps>
}

const Default = ({ radioGroupProps }: IProps) => {
    const [option, setOption] = React.useState('first')

    return (
        <RadioGroup
            value={option}
            spacing={radioGroupProps?.spacing}
            title='My options'
            name='options'
            data-testid='radio-group-container'
            options={radioGroupProps?.options}
            onChange={event => setOption(event.target.value)}
        />
    )
}

export default Default
