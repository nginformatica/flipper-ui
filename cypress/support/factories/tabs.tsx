import React, { useState } from 'react'
import { mount } from 'cypress/react'
import { Tabs, Tab } from '../../../src'

const Component: React.FC = () => {
    const [selected, setSelected] = useState(0)

    const handleChange = (_event: object, value: number) => {
        setSelected(value)
    }

    return (
        <Tabs onChange={handleChange} value={selected}>
            <Tab value={0} label='Profile' />
            <Tab value={1} label='Enterprise' />
            <Tab value={2} label='Billing' />
        </Tabs>
    )
}

export const TabsFactory = () => {
    mount(<Component />)
}
