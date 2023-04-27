import React from 'react'
import { background, primary as primaryColor } from '@/colors'
import { DefaultProps } from '../../types'

export interface LineProps extends DefaultProps {
    /**
     * If true, the line will use the primary color.
     */
    primary?: boolean
    'data-testid'?: string
}

export const Line = ({
    padding,
    margin,
    style,
    primary,
    ...otherProps
}: LineProps) => (
    <div
        style={{
            flex: 1,
            padding,
            margin,
            border: `1px solid ${
                primary ? primaryColor.normal : background.normal
            }`,
            ...style
        }}
        {...otherProps}
    />
)

export default Line
