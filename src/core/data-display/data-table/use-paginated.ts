import { useState, useMemo, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { faker } from '@faker-js/faker'
import { splitEvery } from 'ramda'
import type { Data } from './types'

export interface IDataProps {
    id: string
    product: string
    price: number
    quantity: number
    date: Date
}

interface IPaginated<T> {
    items: T[]
    size: number
    actualPage: number
    totalItens: number
}

export const generateRandomData = (size: number): Data[] => {
    const content: Array<Data> = []

    for (let i = 0; i < size; i++) {
        content.push({
            id: i,
            product: faker.vehicle.model(),
            price: faker.number.float({ min: 0, max: 100000 }),
            quantity: faker.number.int({ min: 1, max: 30 }),
            date: faker.date.recent({ days: 5, refDate: new Date() })
        })
    }

    return content
}

const mockData = generateRandomData(35)

const INITIAL_STATE: IPaginated<Data> = {
    items: [],
    size: 5,
    actualPage: 0,
    totalItens: 0
}

export const usePaginated = () => {
    const [state, setState] = useState<IPaginated<Data>>(INITIAL_STATE)
    const [loading, setLoading] = useState(true)

    const splitData = useMemo(
        () => splitEvery(state.size, mockData),
        [state.size]
    )

    useEffect(() => {
        setState(prev => ({ ...prev, totalItens: mockData.length }))
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        if (splitData[state.actualPage]) {
            setState(prev => ({ ...prev, items: splitData[state.actualPage] }))
        } else {
            setState(prev => ({ ...prev, items: splitData[0], actualPage: 0 }))
        }
    }, [splitData, state.actualPage, state.size])

    useEffect(() => {
        setState(prev => ({
            ...prev,
            items: splitData[state.actualPage]
        }))
    }, [splitData, state.actualPage])

    const handleChangePage = (newPage: number) => {
        setLoading(true)

        setState(prev => ({ ...prev, actualPage: newPage }))

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const handleChangePerPage = (value: number) => {
        setLoading(true)

        setState(prev => ({ ...prev, size: value }))

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const setData: Dispatch<SetStateAction<Data[]>> = (data: Data[]) => {
        setState(prev => ({ ...prev, items: data }))
    }

    return {
        data: state.items,
        setData,
        totalElements: state.totalItens,
        actualPage: state.actualPage,
        size: state.size,
        handleChangePage,
        handleChangePerPage,
        loading,
        mockData
    }
}
