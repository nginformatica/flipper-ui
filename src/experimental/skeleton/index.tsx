import React from 'react'
import SkeletonLoading, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { theme } from '@/theme'

const { grays } = theme.colors

export const Skeleton = (props: SkeletonProps) => (
    <SkeletonLoading
        containerTestId='skeleton-container'
        baseColor={grays.g7}
        highlightColor={grays.g6}
        {...props}
    />
)

export default Skeleton
