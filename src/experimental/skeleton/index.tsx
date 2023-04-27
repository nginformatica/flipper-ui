import { theme } from 'nginformatica-styleguide'
import React from 'react'
import SkeletonLoading, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const mainColor = theme.colors.grays.g7
const subColor = '#CFCFCF'

export const Skeleton = (props: SkeletonProps) => (
    <SkeletonLoading
        containerTestId='skeleton-container'
        baseColor={mainColor}
        highlightColor={subColor}
        {...props}
    />
)

export default Skeleton
