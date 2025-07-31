import { useState } from 'react'

export const useViewMode = (subKey: string) => {
    const STORAGE_KEY = 'view-mode'

    const [activeMode, setActiveMode] = useState<boolean>(() => {
        const sessionData = sessionStorage.getItem(STORAGE_KEY)

        if (sessionData) {
            const parsed = JSON.parse(sessionData)

            if (parsed[subKey] !== undefined) return parsed[subKey]
        }

        const localData = localStorage.getItem(STORAGE_KEY)

        if (localData) {
            const parsed = JSON.parse(localData)

            if (parsed[subKey] !== undefined) return parsed[subKey]
        }

        return false
    })

    const toggleActiveMode = () => {
        setActiveMode(prev => {
            const newValue = !prev

            const sessionData = sessionStorage.getItem(STORAGE_KEY)
            const sessionObj = sessionData ? JSON.parse(sessionData) : {}

            sessionObj[subKey] = newValue
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(sessionObj))

            const localData = localStorage.getItem(STORAGE_KEY)
            const localObj = localData ? JSON.parse(localData) : {}

            localObj[subKey] = newValue
            localStorage.setItem(STORAGE_KEY, JSON.stringify(localObj))

            return newValue
        })
    }

    return [activeMode, toggleActiveMode] as const
}
