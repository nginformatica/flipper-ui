import React from 'react'
import NothingFound from './NothingFound'

export const Default = () => {
    return <NothingFound show />
}

export const WithCustomTest = () => {
    return <NothingFound show customText='Custom text' />
}

export const ReadOnly = () => {
    return <NothingFound show readonly />
}

export const WithButtonLabel = () => {
    return <NothingFound show buttonLabel='Configurações' />
}

export const WithSearchText = () => {
    return <NothingFound show searchText='Fulano' />
}

export default {
    title: 'experimental/NothingFound',
    component: NothingFound
}
