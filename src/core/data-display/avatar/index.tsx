import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { Avatar as MuiAvatar } from '@mui/material'

export interface IProps {
    name?: string
    icon?: ReactNode
    src?: string
    style?: CSSProperties
}

const Avatar = (props: IProps) => {
    const getChild = () => {
        if (props.name) {
            return props.name.charAt(0).toUpperCase()
        }

        return props.icon
    }

    return <MuiAvatar {...props}>{getChild()}</MuiAvatar>
}

export default Avatar
