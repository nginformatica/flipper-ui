import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { Avatar as MuiAvatar } from '@mui/material'
import { take } from 'ramda'

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

    return <MuiAvatar {...props}>{getChild()}</MuiAvatar>
}

export default Avatar
