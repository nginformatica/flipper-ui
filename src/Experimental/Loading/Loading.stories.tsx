import React from 'react'
import Loading from '.'

export const defaultLoading = () => <Loading />

export const customSize = () => <Loading size={32} />

export const customMargin = () => <Loading margin={32} />

export default {
    title: 'Experimental/Loading',
    component: Loading
}
