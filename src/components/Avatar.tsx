import { Avatar } from '@material-ui/core'
import React from 'react'

interface IProps {
    style?: object
    primary?: boolean
    children: React.ReactNode
}

const FAvatar = ({ children, ...otherProps }: IProps) =>
    <Avatar { ...otherProps }>
        { children }
    </Avatar>

export default FAvatar
