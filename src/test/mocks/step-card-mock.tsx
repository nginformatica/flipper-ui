import StepCard, { IStepCardProps } from '@/core/StepCard'
import * as React from 'react'

interface IProps {
    initialLoading?: boolean
    stepProps: Partial<IStepCardProps>
}

const Default = ({ stepProps, initialLoading }: IProps) => {
    const { percentage, summary, title, ...rest } = stepProps
    const [loading, setLoading] = React.useState(initialLoading ?? false)

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    return (
        <StepCard
            percentage={percentage || 0}
            summary={summary || ''}
            title={title || ''}
            loading={loading}
            {...rest}
        />
    )
}

export default Default
