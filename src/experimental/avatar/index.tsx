import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { take } from 'ramda'
import { Avatar as FlipperAvatar } from '@/index'

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
