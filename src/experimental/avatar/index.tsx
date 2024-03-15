import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { take } from 'ramda'
import { Avatar as FlipperAvatar } from '@/index'

export interface IProps {
    name?: string
    icon?: ReactNode
    src?: string
    style?: CSSProperties
}

const Avatar = (props: IProps) => {
    const getChild = () => {
        if (props.name) {
            return take(1, props.name.toUpperCase())
        }

        return props.icon
    }

    return <FlipperAvatar {...props}>{getChild()}</FlipperAvatar>
}

export default Avatar
