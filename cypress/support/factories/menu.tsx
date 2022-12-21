import { mount } from 'cypress/react'
import React, { useState } from 'react'
import { Menu, Button } from '../../../src'
import { generateListOfSpiedItems } from '../utils/generators'

interface IProps {
    elements: JSX.Element[]
}

const Component: React.FC<IProps> = props => {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <>
            <Button onClick={handleClick}>Menu</Button>
            <Menu data-cy='menu-container' open={open} onClick={handleClick}>
                {...props.elements}
            </Menu>
        </>
    )
}

export const MenuFactory = () => {
    const elements = generateListOfSpiedItems()
    mount(<Component elements={elements} />)
}
