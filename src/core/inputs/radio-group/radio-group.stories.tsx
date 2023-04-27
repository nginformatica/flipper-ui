import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import RadioGroup from '.'

export default {
    title: 'Inputs/RadioGroup',
    component: RadioGroup
} as Meta<typeof RadioGroup>

export const Default = () => {
    const [option, setOption] = useState('first')

    return (
        <RadioGroup
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
