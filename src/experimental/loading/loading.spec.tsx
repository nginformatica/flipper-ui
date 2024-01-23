import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Loading } from '.'

export const DefaultLoading = () => <Loading />
export const CustomSizeLoading = () => <Loading size={32} />
export const CustomMarginLoading = () => <Loading margin={32} />

describe('Loading', () => {
    it('should render component', () => {
        render(<DefaultLoading />)

        const loading = screen.getByTestId('loading-component')

        expect(loading).toBeDefined()
    })
})
