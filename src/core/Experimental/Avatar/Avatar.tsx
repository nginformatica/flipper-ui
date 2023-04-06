import FlipperAvatar from '../../Avatar'
import { take } from 'ramda'
import React, { CSSProperties, ReactNode } from 'react'

export interface IProps {
    /** The avatar name */
    name?: string
    /** A custom icon node */
    icon?: ReactNode
    /** An image source*/
    src?: string
    /** Custom styles */
    style?: CSSProperties
}

const FIRST_LETTER = 1

const Avatar = (props: IProps) => {
    const getChild = () => {
        if (props.name) {
            return take(FIRST_LETTER, props.name.toUpperCase())
        }

        return props.icon
    }

    return <FlipperAvatar {...props}>{getChild()}</FlipperAvatar>
}

export default Avatar
