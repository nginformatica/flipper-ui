import React from 'react'
import type { CSSProperties } from 'react'
import type { DefaultProps } from '../../types'

const ContainerStyles: CSSProperties = {
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
    const componentStyle: CSSProperties = Object.assign(
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
