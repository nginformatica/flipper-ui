import React, { useState } from 'react'
import type { IStepCardProps } from '@/core/surfaces/step-card'
import StepCard from '@/core/surfaces/step-card'

interface IProps {
    initialLoading?: boolean
    blockInitialLoading?: boolean
    stepProps: Partial<IStepCardProps>
}

const Default = ({
    stepProps,
    initialLoading,
    blockInitialLoading
}: IProps) => {
    const { percentage, summary, title, ...rest } = stepProps
    const [loading, setLoading] = useState(initialLoading ?? false)

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    return (
        <StepCard
            percentage={percentage || 0}
            summary={summary || ''}
            title={title || ''}
            loading={blockInitialLoading ? undefined : loading}
            {...rest}
        />
    )
}

export default Default
