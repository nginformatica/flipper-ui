import React, { useState } from 'react'
import { mount } from 'cypress/react'
import { Sidebar } from '../../../src'
import { Generators } from '..'

interface IProps {
    children: JSX.Element[]
}

const Component: React.FC<IProps> = props => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <Sidebar open={open} onToggle={toggleOpen}>
            {props.children}
        </Sidebar>
    )
}

export const SidebarFactory = () => {
    const elements = Generators.generateListOfSpiedItems(6)

    mount(<Component>{...elements}</Component>)
}
