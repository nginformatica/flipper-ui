import * as React from 'react'
import { render, screen } from '@testing-library/react'
import NothingFound from '.'

const Default = ({ show = true }: { show?: boolean }) => {
    return <NothingFound show={show} />
}

const WithCustomTest = ({ text }: { text: string }) => {
    return <NothingFound show customText={text} />
}

const ReadOnly = () => {
    return <NothingFound show readonly />
}

const WithButtonLabel = ({ label }: { label: string }) => {
    return <NothingFound show buttonLabel={label} />
}

const WithSearchText = ({ text }: { text: string }) => {
    return <NothingFound show searchText={text} />
}

describe('NothingFound', () => {
    it('should render - Default', () => {
        render(<Default />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Adicionar" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })

    it('should not render ', () => {
        const container = render(<Default show={false} />)

        expect(container.container.childElementCount).toBe(0)
    })

    it('should render - WithCustomTest', () => {
        const TEXT = 'Custom text'
        render(<WithCustomTest text={TEXT} />)

        const label = screen.getByText(TEXT)

        expect(label).toBeDefined()
    })

    it('should render - ReadOnly', () => {
        render(<ReadOnly />)

        const label = screen.getByText('Não há nada aqui.')

        expect(label).toBeDefined()
    })

    it('should render - WithButtonLabel', () => {
        render(<WithButtonLabel label='Configurações' />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Configurações" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })

    it('should render - WithSearchText', () => {
        render(<WithSearchText text='Fulano' />)

        const label = screen.getByText(
            'Sua pesquisa "Fulano" não retornou nenhum resultado.'
        )

        expect(label).toBeDefined()
    })

    it('should render - WithSearchText empty', () => {
        render(<WithSearchText text='' />)

        const label = screen.getByText(
            'Não há nada aqui. Clique em "Adicionar" para cadastrar um item.'
        )

        expect(label).toBeDefined()
    })
})
