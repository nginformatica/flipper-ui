import React from 'react'
import type { SkeletonProps } from 'react-loading-skeleton'
import SkeletonLoading from 'react-loading-skeleton'
import { theme } from '@/theme'
import 'react-loading-skeleton/dist/skeleton.css'

const { gray } = theme.colors

const Skeleton = (props: SkeletonProps) => (
    <SkeletonLoading
        containerTestId='skeleton-container'
        baseColor={gray[200]}
        highlightColor={gray[300]}
        {...props}
    />
)

export default Skeleton
