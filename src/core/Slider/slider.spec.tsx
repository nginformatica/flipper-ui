import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Slider from '.'
import drag from '../../test/util'
import { act } from 'react-dom/test-utils'

describe('Slider', () => {
    it('should render and slide', async () => {
        render(
            <Slider data-testid='slider-container'>
                <>Slider</>
            </Slider>
        )

        const slider = screen.getByRole('slider')

        await act(async () => {
            await drag(slider, {
                delta: { x: 1, y: 0 }
            })
        })

        expect(slider).toHaveProperty('style.left', '100%')
    })

    it('should render with custom style', () => {
        render(
            <Slider
                data-testid='slider-container'
                margin={10}
                padding={5}
                style={{ color: 'red' }}>
                <>Slider</>
            </Slider>
        )

        const container = screen.getByTestId('slider-container')

        expect(container).toHaveProperty('style.color', 'red')
        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
    })
})
