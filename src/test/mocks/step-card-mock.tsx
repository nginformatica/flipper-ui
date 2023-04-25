import StepCard, { IStepCardProps } from '@/core/surfaces/StepCard'
import * as React from 'react'

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
    const [loading, setLoading] = React.useState(initialLoading ?? false)

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
