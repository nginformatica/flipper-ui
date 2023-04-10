import React from 'react'
import Avatar from '.'

export default {
    title: 'experimental/Avatar',
    component: Avatar
}

const srcImage = 'https://imgflip.com/s/meme/Doge.jpg'

export const simpleAvatar = () => {
    return <Avatar name='felipe' src={srcImage} />
}

export const withCustomSize = () => {
    return (
        <Avatar
            name='felipe'
            src={srcImage}
            style={{ width: '64px', height: '64px' }}
        />
    )
}

export const withoutImage = () => {
    return <Avatar name='felipe' style={{ width: '64px', height: '64px' }} />
}
