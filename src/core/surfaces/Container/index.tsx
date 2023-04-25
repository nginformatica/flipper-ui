import React from 'react'
import { DefaultProps } from '../../types'

const ContainerStyles: React.CSSProperties = {
    display: 'flex',
    flex: 1
}

const Container = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: DefaultProps) => {
    const componentStyle: React.CSSProperties = Object.assign(
        {},
        ContainerStyles,
        padding,
        margin,
        style
    )

    return (
        <div style={componentStyle} {...otherProps}>
            {children}
        </div>
    )
}

export default Container
