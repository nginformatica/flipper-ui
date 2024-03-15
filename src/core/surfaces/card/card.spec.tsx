import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '@/core/inputs/button'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader
} from '.'

describe('Card', () => {
    it('should render', () => {
        render(
            <Card name='test' data-testid='card'>
                <CardActionArea>
                    <CardMedia
                        image={'valid_url'}
                        title='Puppies'
                        style={{ height: '256px' }}
                    />
                    <CardContent>Content</CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'>
                        Confirm
                    </Button>
                </CardActions>
            </Card>
        )

        const card = screen.getByText('Content')

        expect(card).toBeDefined()
    })

    it('card header should spread props', () => {
        render(
            <CardHeader
                title={'This is a title'}
                subheader={'This is a subheader'}
            />
        )

        const cardHeader = screen.getByText('This is a title')
        const cardSubheader = screen.getByText('This is a subheader')

        expect(cardHeader).toBeDefined()
        expect(cardSubheader).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Card name='test' data-testid='card'>
                <CardActionArea>
                    <CardMedia
                        image={'valid_url'}
                        title='Puppies'
                        style={{ height: '256px' }}
                    />
                    <CardContent>Content</CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'>
                        Confirm
                    </Button>
                </CardActions>
            </Card>
        )

        expect(container).toMatchSnapshot()
    })
})
