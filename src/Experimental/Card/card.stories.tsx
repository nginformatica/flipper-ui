import React from 'react'
import Card from '.'
import { Typography } from '../../'

export const card = () => {
    return (
        <Card name='Card' title='Foo Bar'>
            <Typography>Dummy content</Typography>
        </Card>
    )
}

export default {
    title: 'experimental/Card',
    component: Card
}
