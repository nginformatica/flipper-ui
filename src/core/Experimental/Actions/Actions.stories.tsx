import React from 'react'
import Actions from './Actions'

export const actions = () => <Actions onConfirm={() => alert('foo')} />

export default {
    title: 'Experimental/Actions',
    component: Actions
}
