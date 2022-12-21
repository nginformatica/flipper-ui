import React from 'react'
import { mount } from 'cypress/react'
import { Card, Button } from '../../../src'
import {
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions
} from '../../../src/core/Card'
import { generateMock, generateSpy } from '../component'

export const CardFactory = () => {
    const url =
        'https://media2.s-nbcnews.com/j/newscms/2018_20/1339477' +
        '/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg'

    const onClickSpyTop = generateSpy('card-top')
    const onClickSpyBottom = generateSpy('card-bottom')

    generateMock({ value: 'card-params', type: 'GenericStyleParams' }).then(
        params => {
            if (params instanceof Object && 'className' in params) {
                mount(
                    <Card
                        {...params}
                        data-cy='card-container'
                        id='generic-testing-id'>
                        <CardActionArea onClick={onClickSpyTop}>
                            <CardMedia
                                image={url}
                                title='Puppies'
                                style={{ height: '256px' }}
                            />
                            <CardContent>
                                ...look, a beautiful person over here
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size='small'
                                color='primary'
                                onClick={onClickSpyBottom}>
                                Confirm
                            </Button>
                        </CardActions>
                    </Card>
                )
            } else {
                throw new Error('Invalid mock generation')
            }
        }
    )
}
