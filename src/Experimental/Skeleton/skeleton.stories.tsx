import React from 'react'
import SkeletonComponent from '.'

export const Simple = () => <SkeletonComponent />

export const WithCustomHeight = () => (
    <SkeletonComponent width={64} height={64} />
)

export const Circle = () => <SkeletonComponent circle width={64} height={64} />

export default {
    title: 'experimental/Skeleton',
    component: Simple
}
