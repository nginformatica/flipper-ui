import React from 'react'
import type { ReactNode } from 'react'
import Typography from '@/core/data-display/typography'

export interface IProps {
    searchText?: string
    customText?: ReactNode
    buttonLabel?: string
    readonly?: boolean
    show: boolean
}

const NothingFound = (props: IProps) => {
    const { buttonLabel, readonly, ...rest } = props
    const label = buttonLabel || 'Adicionar'

    const message = readonly
        ? 'Não há nada aqui.'
        : `Não há nada aqui. Clique em "${label}" para cadastrar um item.`

    const { customText = message, searchText = '', show, ...otherProps } = rest

    return show ? (
        <Typography
            flex={1}
            variant='h5'
            align='center'
            color='textSecondary'
            padding='48px 0'
            {...otherProps}>
            {searchText !== ''
                ? `Sua pesquisa "${searchText}" não retornou nenhum resultado.`
                : customText}
        </Typography>
    ) : null
}

export default NothingFound
