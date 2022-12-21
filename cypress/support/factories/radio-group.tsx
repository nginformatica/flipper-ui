import React, { useState } from 'react'
import { mount } from 'cypress/react'
import { RadioGroup } from '../../../src/'

const Component: React.FC = () => {
    const [option, setOption] = useState('first')

    return (
        <RadioGroup
            data-cy='radio-group-container'
            value={option}
            title='My options'
            name='options'
            options={[
                {
                    label: 'First option',
                    value: 'first'
                },
                {
                    label: 'Second Option',
                    value: 'second'
                }
            ]}
            onChange={event => setOption(event.target.value)}
        />
    )
}

export const RadioGroupFactory = () => {
    mount(<Component />)
}
