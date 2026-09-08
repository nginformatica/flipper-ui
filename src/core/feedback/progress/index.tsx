import React, { useId } from 'react'
import type { ReactNode } from 'react'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiLinearProgress from '@mui/material/LinearProgress'
import type { DefaultProps } from '../../types'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import type { SxProps, Theme } from '@mui/material/styles'
import Typography from '@/core/data-display/typography'
import {
    CircularLabel,
    CircularWrapper,
    InlineWrapper,
    LinearWrapper
} from './styles'

/**
 * Below this diameter the label no longer fits inside the ring, so it is
 * rendered beside it. Matches the MUI default `size`.
 */
const MIN_INNER_LABEL_SIZE = 40

export interface ILinear {
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit'
    variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query'
    valueBuffer?: number
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
    /**
     * Height of the linear bar. The fill follows it on its own, so the
     * inner bars need no styling of their own. Default: `4`.
     */
    thickness?: number | string
    /**
     * Corner radius of the linear bar, as CSS — `'3px'`, `'50%'`. The fill
     * is clipped by it on its own, since the bar hides its own overflow.
     * Default: square corners.
     */
    borderRadius?: string
}

export interface ICircular {
    size?: string | number
    /**
     * `buffer` and `query` are implemented by the linear bar alone. They are
     * declared here only so the intersection with `ILinear` does not collapse
     * to the smaller set, which made them unusable on either mode.
     */
    variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query'
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit'
}

export interface ProgressProps extends DefaultProps {
    value?: number
    linear?: boolean
    /**
     * Inline content rendered next to the progress — beside the linear bar,
     * and inside the ring of a circular one, which falls back to beside it
     * below 40px. It also names the progressbar, so no `ariaLabel` is needed
     * alongside it. Block elements are unsupported: it lands inside a
     * `Typography`.
     */
    label?: ReactNode
    /**
     * Accessible name, required whenever there is no `label` — a progressbar
     * with no name announces a bare percentage. Overrides `label` as the name.
     */
    ariaLabel?: string
    /**
     * Where a circular `label` goes. Default: `'inside'` from 40px up and
     * `'beside'` below it — informing it skips that measurement, which
     * cannot read a `size` in `rem` or `em`. The linear bar ignores it and
     * always renders the label beside itself.
     */
    labelPosition?: 'inside' | 'beside'
    /** Merged over the styles the color props generate, never replacing them. */
    sx?: SxProps<Theme>
}

export interface IColors {
    primaryColor?: string
    barPrimaryColor?: string
    barSecondaryColor?: string
}

const toPixels = (size?: string | number) => {
    if (typeof size === 'number') {
        return size
    }

    return typeof size === 'string' && size.endsWith('px')
        ? parseFloat(size)
        : undefined
}

const Progress = ({
    sx,
    label,
    linear,
    ariaLabel,
    thickness,
    borderRadius,
    labelPosition,
    style = {},
    margin,
    padding,
    valueBuffer,
    primaryColor,
    barPrimaryColor,
    barSecondaryColor,
    ...otherProps
}: ProgressProps & ICircular & ILinear) => {
    const labelId = useId()

    const withReceivedSx = (base?: SxProps<Theme>) =>
        sx ? [base, ...(Array.isArray(sx) ? sx : [sx])] : base

    const labelling = {
        'aria-label': ariaLabel,
        'aria-labelledby': !ariaLabel && label ? labelId : undefined,
        'aria-valuetext': typeof label === 'string' ? label : undefined
    }

    const renderLabel = () => (
        <Typography id={labelId} variant='caption'>
            {label}
        </Typography>
    )

    if (linear) {
        const bar = (
            <MuiLinearProgress
                style={{ margin, padding, ...style }}
                valueBuffer={valueBuffer}
                sx={withReceivedSx({
                    ...(thickness === undefined ? {} : { height: thickness }),
                    ...(borderRadius === undefined ? {} : { borderRadius }),
                    backgroundColor: primaryColor,
                    '.MuiLinearProgress-barColorPrimary': {
                        backgroundColor: barPrimaryColor
                    },
                    '.MuiLinearProgress-barColorSecondary': {
                        backgroundColor: barSecondaryColor
                    }
                })}
                {...labelling}
                {...otherProps}
            />
        )

        return label ? (
            <LinearWrapper>
                {bar}
                {renderLabel()}
            </LinearWrapper>
        ) : (
            bar
        )
    }

    const { variant, ...circularProps } = otherProps

    const ring = (
        <MuiCircularProgress
            style={{ margin, padding, ...style }}
            sx={withReceivedSx()}
            // Forwarded verbatim: the ring renders a class of its own for
            // `buffer` and `query`, so narrowing them here would change it.
            variant={variant as CircularProgressProps['variant']}
            {...labelling}
            {...circularProps}
        />
    )

    if (!label) {
        return ring
    }

    const fitsInside =
        labelPosition === undefined
            ? (toPixels(circularProps.size) ?? MIN_INNER_LABEL_SIZE) >=
              MIN_INNER_LABEL_SIZE
            : labelPosition === 'inside'

    return fitsInside ? (
        <CircularWrapper>
            {ring}
            <CircularLabel>{renderLabel()}</CircularLabel>
        </CircularWrapper>
    ) : (
        <InlineWrapper>
            {ring}
            {renderLabel()}
        </InlineWrapper>
    )
}

export default Progress
