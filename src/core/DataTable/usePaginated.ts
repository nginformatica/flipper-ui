import faker from 'faker'
import { splitEvery } from 'ramda'
import { useState, useMemo, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

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

export const generateRandomDate = (size: number): IDataProps[] => {
    const content: Array<IDataProps> = []
    for (let i = 0; i < size; i++) {
        content.push({
            id: uuid(),
            product: faker.vehicle.model(),
            price: faker.datatype.float({ min: 0, max: 100000 }),
            quantity: faker.datatype.number({ min: 0, max: 30 }),
            date: faker.date.recent(2)
        })
    }

    return content
}

const MOCK_DELAY_VALUE = 1000
const DEFAULT_PAGE_SIZE = 5
const DEFAULT_MOCK_LENGTH = 35

const mockData = generateRandomDate(DEFAULT_MOCK_LENGTH)

const INITIAL_STATE: IPaginated<IDataProps> = {
    items: [],
    size: DEFAULT_PAGE_SIZE,
    actualPage: 0,
    totalItens: 0
}

export const usePaginated = () => {
    const [state, setState] = useState<IPaginated<IDataProps>>(INITIAL_STATE)
    const [loading, setLoading] = useState(true)

    const splitData = useMemo(() => splitEvery(state.size, mockData), [
        state.size
    ])

    useEffect(() => {
        setState(prev => ({ ...prev, totalItens: mockData.length }))
        setTimeout(() => {
            setLoading(false)
        }, MOCK_DELAY_VALUE)
    }, [])

    useEffect(() => {
        if (splitData[state.actualPage]) {
            setState(prev => ({ ...prev, items: splitData[state.actualPage] }))
        } else {
            setState(prev => ({ ...prev, items: splitData[0], actualPage: 0 }))
        }
    }, [state.size])

    useEffect(() => {
        setState(prev => ({
            ...prev,
            items: splitData[state.actualPage]
        }))
    }, [state.actualPage])

    const handleChangePage = (newPage: number) => {
        setLoading(true)
        setState(prev => ({ ...prev, actualPage: newPage }))
        setTimeout(() => {
            setLoading(false)
        }, MOCK_DELAY_VALUE)
    }

    const handleChangePerPage = (value: number) => {
        setLoading(true)
        setState(prev => ({ ...prev, size: value }))
        setTimeout(() => {
            setLoading(false)
        }, MOCK_DELAY_VALUE)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setData = (data: any) => {
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
        loading
    }
}
