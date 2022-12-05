import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import CheckBox from '../core/Checkbox'

const TestComponent = () => {
    const [checked, setChecked] = useState(false)

    return (
        <CheckBox
            checked={checked}
            name='check-test'
            label='check it'
            onChange={() => setChecked(!checked)}
        />
    )
}

test('Testing CheckBox component', () => {
    const { getByText, asFragment } = render(<TestComponent />)
    const firstRender = asFragment()

    fireEvent.click(getByText('check it'))

    expect(getByText('check it')).toBeTruthy()
    expect(firstRender).not.toEqual(asFragment)
})
