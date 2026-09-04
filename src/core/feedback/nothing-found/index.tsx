import React from 'react'
import type { ReactNode } from 'react'
import type { ITypographyProps } from '@/core/data-display/typography'
import Typography from '@/core/data-display/typography'

/**
 * Every `Typography` prop is accepted and merged over the message defaults —
 * `variant='h5'`, `align='center'`, `color='textSecondary'`. `variant` also
 * sets the heading level, so `{ component: 'h2' }` keeps the `h5` type scale
 * on an `<h2>` tag.
 */
export interface IProps extends Partial<ITypographyProps> {
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

    const {
        customText = message,
        searchText = '',
        show,
        variant = 'h5',
        ...otherProps
    } = rest

    return show ? (
        <Typography
            flex={1}
            variant={variant}
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
