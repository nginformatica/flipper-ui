import { Avatar as MuiAvatar } from '@material-ui/core'
import React from 'react'

interface IProps {
    style?: object
    sizes?: string
    src?: string
    imgProps?: object
    primary?: boolean
    children: React.ReactNode
}

const Avatar = ({ children, ...otherProps }: IProps) =>
    <MuiAvatar { ...otherProps }>
        { children }
    </MuiAvatar>

export default Avatar
