import React, { useState, CSSProperties } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalBarSeries,
    LabelSeries,
    Hint
} from 'react-vis'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

type TData = [number | null, string | number | null]

interface IProps {
    data: TData[]
    color?: string
    animation?: boolean
    width?: number
    height?: number
    xLabelType?: 'ordinal' | 'literal'
    barWidth?: number
    yToolTip?: string
    xToolTip?: string
    percent?: boolean
}

interface IBarChartProps {
    x: TData[0]
    y: TData[1]
    xOffset: number
    yOffset: number
    style: CSSProperties
}

export const ChartsTooltip = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    border-radius: 4px;
    padding: 6px;
    opacity: 0.6; 
`

const TooltipText = styled(Typography)`
    font-size: 10px !important;
    color: white !important;
`

export const mountTooltip = (
    axis: string | number | null,
    text?: string,
    percent?: boolean
) => {
    return (
        <TooltipText>
            {
                text && percent
                    ? text + `${axis}%`
                    : text
                        ? text + axis
                        : axis
            }
        </TooltipText>
    )
}

const getGreyBars = ([, y]: TData) => ({
    x: 100,
    y
})

const formatToCartesianPlan = ([x, y]: TData): IBarChartProps => ({
    x,
    y,
    xOffset: (x && x <= 7) ? 2 : -4,
    yOffset: -0.25,
    style: {
        textAnchor: (x && x <= 7) ? 'start' : 'end',
        dominantBaseline: 'central',
        fontSize: '12px'
    }
})

const elipsize = text => text.toString().length > 6
    ? text.slice(0, 3) + '...'
    : text

const INITIAL_STATE: IBarChartProps = formatToCartesianPlan([null, null])

const VerticalBarsChart = (props: IProps) => {
    const [hoveredBar, setHoveredBar] = useState<IBarChartProps>(INITIAL_STATE)
    const {
        animation,
        xLabelType,
        width,
        height,
        barWidth,
        color,
        data,
        percent,
        yToolTip,
        xToolTip
    } = props

    const newData = data.map(formatToCartesianPlan)

    const onMouseOverBar = () => {
        setHoveredBar(INITIAL_STATE)
    }

    return (
        <XYPlot
            animation={ animation }
            margin={ { left: 50, right: 10, top: 10, bottom: 40 } }
            yType={ xLabelType || 'ordinal' }
            width={ width || 400 }
            height={ height || 275 }
            onMouseLeave={ onMouseOverBar }>
            <XAxis hideTicks />
            <YAxis
                tickFormat={ (tick: string) => elipsize(tick) }
                style={ {
                    text: { fontSize: '12px' }
                } }
            />
            <HorizontalBarSeries
                cluster={ '1' }
                animation={ animation }
                barWidth={ barWidth || 0.8 }
                color='#8bc34a5c'
                stroke={ color || '#8BC34A' }
                data={ data.map(getGreyBars) }
                style={ {
                    rx: '6',
                    ry: '6'
                } }
            />
            <HorizontalBarSeries
                cluster={ '1' }
                animation={ animation }
                barWidth={ barWidth || 0.8 }
                color={ color || '#8BC34A' }
                data={ newData }
                onValueMouseOver={ (bar: IBarChartProps) => setHoveredBar(bar) }
                style={ {
                    rx: '6',
                    ry: '6'
                } }
            />
            <LabelSeries
                animation={ animation }
                data={ newData }
                getLabel={ percent && (newData => `${newData.x}%`) }
            />
            {
                hoveredBar !== INITIAL_STATE &&
                <Hint value={ hoveredBar }>
                    <ChartsTooltip>
                        { mountTooltip(hoveredBar.y, yToolTip) }
                        { mountTooltip(hoveredBar.x, xToolTip, percent) }
                    </ChartsTooltip>
                </Hint>
            }
        </XYPlot>
    )
}

export default VerticalBarsChart
