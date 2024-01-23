import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/core/inputs/button'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader
} from '.'

const url = 'valid_url'

describe('Card', () => {
    it('should render', () => {
        render(
            <Card name='test' data-testid='card'>
                <CardActionArea>
                    <CardMedia
                        image={url}
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
        const title = 'This is a title'
        const subheader = 'This is a subheader'

        render(<CardHeader title={title} subheader={subheader} />)

        const cardHeader = screen.getByText(title)
        const cardSubheader = screen.getByText(subheader)

        expect(cardHeader).toBeDefined()
        expect(cardSubheader).toBeDefined()
    })
})
