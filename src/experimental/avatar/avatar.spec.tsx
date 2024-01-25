import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'

describe('Avatar', () => {
    it('should render first letter', () => {
        render(<Avatar name='felipe' />)

        const avatar = screen.getByText('F')

        expect(avatar).toBeDefined()
    })

    it('should render custom icon', () => {
        render(<Avatar icon={<div>icon</div>} />)

        const avatar = screen.getByText('icon')

        expect(avatar).toBeDefined()
    })

    it('should render custom image', () => {
        render(<Avatar src='https://imgflip.com/s/meme/Doge.jpg' />)

        const avatar = screen.getByRole('img')

        expect(avatar).toBeDefined()
    })
})
