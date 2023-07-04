import { Typography } from '@/index'
import { TypographyProps } from '@material-ui/core'
import React from 'react'

export interface IProps extends TypographyProps {
    searchText?: string
    customText?: string
    buttonLabel?: string
    readonly?: boolean
    show: boolean
}

export const NothingFound = (props: IProps) => {
    const { buttonLabel, readonly, ...rest } = props
    const label = buttonLabel || 'Adicionar'
    const message = readonly
        ? 'Não há nada aqui.'
        : 'Não há nada aqui. Clique em "' + label + '" para cadastrar um item.'

    const { customText = message, searchText = '', show, ...otherProps } = rest

    return show ? (
        <Typography
            align='center'
            variant='h5'
            color='textSecondary'
            padding='48px 0'
            style={{ flex: 1 }}
            {...otherProps}>
            {searchText !== ''
                ? 'Sua pesquisa "' +
                  searchText +
                  '" não retornou nenhum resultado.'
                : customText}
        </Typography>
    ) : null
}

export default NothingFound