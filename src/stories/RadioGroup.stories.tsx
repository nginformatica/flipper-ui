import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import RadioGroup from '../core/RadioGroup'

export default {
    title: 'RadioGroup',
    component: RadioGroup
} as ComponentMeta<typeof RadioGroup>

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
