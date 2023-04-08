import React from 'react'
import PanelComponent from '.'

export const Panel = () => {
    const [open, setOpen] = React.useState(true)

    const handleClickSummary = () => {
        setOpen(!open)
    }

    return (
        <PanelComponent
            expanded={open}
            onClick={handleClickSummary}
            title='Foo'
            details={<button onClick={() => setOpen(false)}>bar</button>}
        />
    )
}

export const NestedPanel = () => {
    const [open, setOpen] = React.useState(true)

    const handleClickSummary = () => {
        setOpen(!open)
    }

    return (
        <PanelComponent
            nested
            expanded={open}
            onClick={handleClickSummary}
            title='Foo'
            details={<button onClick={() => setOpen(false)}>bar</button>}
        />
    )
}

export const WithOmittedIcon = () => {
    const [open, setOpen] = React.useState(true)

    const handleClickSummary = () => {
        setOpen(!open)
    }

    return (
        <PanelComponent
            expanded={open}
            hideExpansionIcon={true}
            onClick={handleClickSummary}
            title='Foo'
            details={<button onClick={() => setOpen(false)}>bar</button>}
        />
    )
}

export default {
    title: 'Experimental/Panel',
    component: Panel
}
