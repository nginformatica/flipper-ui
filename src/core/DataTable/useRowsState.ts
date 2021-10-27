import { useCallback, useEffect, useState } from 'react'
import { Data, Identifier, RowState, StackView, RowMode } from './types'

export const useRowsState = <D extends Data, V extends StackView>(
    rows: D[],
    newRow?: Partial<D>
) => {
    const [state, setState] = useState(() => ({
        internal: new Map<Identifier, RowState<D,V>>()
    }))

    // TODO: lazy inicialization
    useEffect(() => {
        const nextState = new Map<Identifier, RowState<D,V>>()

        for(const row of rows) {
            const elem = state.internal.get(row.id)
            if (elem) {
                nextState.set(row.id, elem)
            } else {
                nextState.set(
                    row.id,
                    {
                        editableState: {},
                        mode: RowMode.View,
                        stackView: [],
                        currentState: row
                    }
                )
            }
        }

        if (newRow?.id) {
            nextState.set(
                newRow.id,
                {
                    editableState: { ...newRow },
                    mode: RowMode.View,
                    stackView: []
                }
            )
        }

        setState({ internal: nextState })
    },[rows,!!newRow])

    const setRowState = useCallback((
        id: Identifier,
        partial: Partial<RowState<D,V>>
    ) => {
        setState(state => {
            const elem = state.internal.get(id)
            if (elem) {
                state.internal.set(id, { ...elem, ...partial })
            }

            return { internal: state.internal }
        })
    }, [])

    const pushRowView = useCallback((id: Identifier, view: keyof V) => {
        setState(state => {
            const elem = state.internal.get(id)
            if (elem) {
                elem.stackView.push(view)
                state.internal.set(id, elem)
            }

            return { internal: state.internal }
        })
    }, [])

    const popRowView = useCallback((id: Identifier) => {
        setState(state => {
            const elem = state.internal.get(id)

            if (elem) {
                elem?.stackView.pop()
                state.internal.set(id, elem)
            }

            return { internal: state.internal }
        })
    }, [])

    const getRowState = useCallback((
        id: Identifier
    ): RowState<D,V> | undefined => {
        return state.internal.get(id)
    },[state])

    const setEditableRowState = useCallback((
        id: Identifier
    ) => (patch: Partial<D>) => {
        setState(state => {
            const elem = state.internal.get(id)

            if (elem) {
                elem.editableState = { ...elem.editableState, ...patch }
            } else {
                state.internal.set(
                    id,
                    {
                        editableState: patch,
                        mode: RowMode.View,
                        stackView: []
                    }
                )
            }

            return { internal: state.internal }
        })
    },[])

    return {
        getRowState,
        setEditableRowState,
        setRowState,
        pushRowView,
        popRowView
    }
}
