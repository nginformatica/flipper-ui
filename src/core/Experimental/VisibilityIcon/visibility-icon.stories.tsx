import React from 'react'
import VisibilityIconComponent from './VisibilityIcon'

export const VisibilityIcon = () => {
    const [show, setShow] = React.useState(false)

    return (
        <VisibilityIconComponent
            name='show'
            show={show}
            onToggle={() => setShow(!show)}
        />
    )
}

export default {
    title: 'experimental/VisibilityIcon',
    component: VisibilityIcon
}
