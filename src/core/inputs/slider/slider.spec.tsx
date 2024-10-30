import React, { act } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import drag from '@/test/util'
import Slider from '.'
import '@testing-library/jest-dom'

describe('Slider', () => {
    it('should render', async () => {
        render(<Slider data-testid='slider-container'>Slider</Slider>)

        const slider = screen.getByTestId('slider-container')

        expect(slider).toBeDefined()
    })

    it('should render and slide', async () => {
        render(<Slider data-testid='slider-container'>Slider</Slider>)

        const slider = screen.getByRole('slider')
        const sliderTrack = screen
            .getByTestId('slider-container')
            .querySelector('.MuiSlider-track')

        await act(async () => {
            await drag(slider, { delta: { x: 100, y: 0 } })
        })

        waitFor(() => expect(sliderTrack).toHaveProperty('style.width', '100%'))
    })

    it('should render with custom style', () => {
        render(
            <Slider
                data-testid='slider-container'
                margin={10}
                padding={5}
                style={{ color: 'red' }}>
                Slider
            </Slider>
        )

        const container = screen.getByTestId('slider-container')

        expect(container).toHaveProperty('style.color', 'red')
        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')
    })

    it('should render with custom label styles', () => {
        render(
            <Slider
                data-testid='slider-container'
                padding={5}
                margin={10}
                defaultValue={50}
                color='primary'
                valueLabelDisplay='on'>
                Slider
            </Slider>
        )

        const sliderLabelValue = screen.getByDisplayValue('50')

        expect(sliderLabelValue).toBeDefined()

        const slider = screen
            .getByTestId('slider-container')
            .querySelector('.MuiSlider-thumb')

        const sliderLabel = slider?.querySelector('.MuiSlider-valueLabel')

        waitFor(() => {
            expect(sliderLabel).toHaveStyle('border-radius: 5px')
            expect(sliderLabel).toHaveStyle('background-color: #152849')
        })
    })

    it('should match snapshot', async () => {
        const { container } = render(
            <Slider
                data-testid='slider-container'
                padding={5}
                margin={10}
                defaultValue={50}
                color='success'
                valueLabelDisplay='auto'>
                Slider
            </Slider>
        )

        expect(container).toMatchSnapshot()
    })
})
