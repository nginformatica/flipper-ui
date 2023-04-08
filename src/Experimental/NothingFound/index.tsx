import { Typography } from '@/index'
import React from 'react'

export interface IProps {
    searchText?: string
    customText?: string
    buttonLabel?: string
    readonly?: boolean
    show: boolean
}

const NothingFound = (props: IProps) => {
    const label = props.buttonLabel || 'Adicionar'
    const message = props.readonly
        ? 'Não há nada aqui.'
        : 'Não há nada aqui. Clique em "' + label + '" para cadastrar um item.'

    const { customText = message, searchText = '', show } = props

    return show ? (
        <Typography
            align='center'
            variant='h5'
            color='textSecondary'
            padding='48px 0'
            style={{ flex: 1 }}>
            {searchText !== ''
                ? 'Sua pesquisa "' +
                  searchText +
                  '" não retornou nenhum resultado.'
                : customText}
        </Typography>
    ) : null
}

export default NothingFound
