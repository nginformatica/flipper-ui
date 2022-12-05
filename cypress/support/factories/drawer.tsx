import { ListItemProps } from '@material-ui/core'
import { mount } from 'cypress/react'
import React, { useState } from 'react'
import { Button, Drawer, List } from '../../../src'
import { generateMock } from '../component'

interface IProps {
    list: ListItemProps[]
}

const Component: React.FC<IProps> = props => {
    const [open, SetOpen] = useState(false)

    const handleClick = () => {
        SetOpen(!open)
    }

    return (
        <>
            <Button onClick={handleClick} disabled={open}>
                Open
            </Button>
            <Drawer open={open} onClick={handleClick}>
                <List>{...props.list}</List>
            </Drawer>
        </>
    )
}

export const DrawerFactory = () => {
    generateMock({ value: 'drawer-content', type: 'ListOfItens' }).then(
        list => {
            mount(<Component list={list as ListItemProps[]} />)
        }
    )
}
