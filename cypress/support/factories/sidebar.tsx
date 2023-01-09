import React, { useState } from 'react'
import { mount } from 'cypress/react18'
import { Sidebar } from '../../../src'
import { Generators } from '..'
import { omit } from 'ramda'

interface IProps {
    children: JSX.Element[]
}

const Component: React.FC<IProps> = props => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <Sidebar
            {...omit(['children'], props)}
            open={open}
            onToggle={toggleOpen}>
            {props.children}
        </Sidebar>
    )
}

export const SidebarFactory = () => {
    const elements = Generators.generateListOfSpiedItems(6)

    mount(<Component data-cy='sidebar-container'>{...elements}</Component>)
}
