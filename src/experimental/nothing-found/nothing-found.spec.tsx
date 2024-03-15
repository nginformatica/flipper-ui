import React from 'react'
import { render, screen } from '@testing-library/react'
import { NothingFound } from '.'

describe('NothingFound', () => {
    it('should render', () => {
        render(<NothingFound show />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Adicionar" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })

    it('should not render', () => {
        const container = render(<NothingFound show={false} />)

        expect(container.container.childElementCount).toBe(0)
    })

    it('should render with custom test', () => {
        render(<NothingFound show customText='Custom text' />)

        const label = screen.getByText('Custom text')

        expect(label).toBeDefined()
    })

    it('should render read only', () => {
        render(<NothingFound show readonly />)

        const label = screen.getByText('Não há nada aqui.')

        expect(label).toBeDefined()
    })

    it('should render with button label', () => {
        render(<NothingFound show buttonLabel='Configurações' />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Configurações" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })

    it('should render with search text', () => {
        render(<NothingFound show searchText='Fulano' />)

        const label = screen.getByText(
            'Sua pesquisa "Fulano" não retornou nenhum resultado.'
        )

        expect(label).toBeDefined()
    })

    it('should render with search text empty', () => {
        render(<NothingFound show searchText='' />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Adicionar" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(<NothingFound show />)

        expect(container).toMatchSnapshot()
    })
})
