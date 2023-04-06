import React from 'react'
import Sidebar from './SidebarV2'
import { Home, Computer, Edit } from '@material-ui/icons'

export const loading = () => {
    return <Sidebar loading={true} options={[]} />
}

export const sidebar = () => {
    return (
        <Sidebar
            options={[
                {
                    icon: <Home />,
                    name: 'Home',
                    label: 'Home',
                    route: '/'
                },
                {
                    icon: <Computer />,
                    name: 'Computer',
                    label: 'Computer',
                    route: '/computer'
                }
            ]}
            extraOptions={[
                {
                    icon: <Edit />,
                    name: 'Edit',
                    label: 'edit',
                    route: '/edit'
                }
            ]}
            handleGoTo={(foo: string, bar: string) => () => {
                alert(foo + ' ' + bar)
            }}
        />
    )
}

export default {
    title: 'experimental/Sidebar',
    component: Sidebar
}
