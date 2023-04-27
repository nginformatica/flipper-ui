import { Meta } from '@storybook/react'
import React from 'react'
import Card, { CardActionArea, CardActions, CardContent, CardMedia } from '.'
import Button from '@/core/inputs/button'

export default {
    title: 'Surfaces/Card',
    component: Card
} as Meta<typeof Card>

const url =
    'https://media2.s-nbcnews.com/j/newscms/2018_20/1339477' +
    '/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg'

export const Default = () => (
    <Card>
        <CardActionArea>
            <CardMedia
                image={url}
                title='Puppies'
                style={{ height: '256px' }}
            />
            <CardContent>...look, a beautiful person over here</CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>
                Confirm
            </Button>
        </CardActions>
    </Card>
)
