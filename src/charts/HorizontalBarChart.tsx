import React, { useState, CSSProperties, MouseEvent } from 'react'
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    HorizontalBarSeries,
    LabelSeries,
    Hint
} from 'react-vis'
import styled from 'styled-components'
import Typography from '../core/Typography'

type TData = [number | null, string | number | null]

interface IProps {
    color?: string
    behindColor?: string
    animation?: boolean
    width?: number
    height?: number
    xLabelType?: 'ordinal' | 'literal'
    barWidth?: number
    yToolTip?: string
    xToolTip?: string
    percent?: boolean
    data: TData[]
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

export const TooltipText = styled(Typography)`
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

const getBehindBars = ([, y]: TData) => ({
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

const HorizontalBarChart = ({
    animation,
    xLabelType,
    width,
    height,
    barWidth,
    behindColor,
    color,
    data,
    percent,
    yToolTip,
    xToolTip
}: IProps) => {
    const [hoveredBar, setHoveredBar] = useState<IBarChartProps>(INITIAL_STATE)

    const newData = data.map(formatToCartesianPlan).map(item => ({
        ...item,
        opacity: item.x === hoveredBar[0] && item.y === hoveredBar[1] ? 0.5 : 1
    }))

    const listSize = data.length >= 3
        ? data.length * 38
        : data.length === 2 ? 98 : 68

    const barHeight = Math.min(listSize, 275)

    const handleMouseOverBar =
        (clear: boolean) =>
            (param: MouseEvent<HTMLOrSVGElement> | IBarChartProps) => {
                if (clear) {
                    setHoveredBar(INITIAL_STATE)
                } else if ('x' in param) {
                    setHoveredBar(param)
                }
            }

    return (
        <FlexibleXYPlot
            animation={ animation }
            margin={ { left: 60, right: 10, top: 10, bottom: 40 } }
            yType={ xLabelType || 'ordinal' }
            width={ width || 400 }
            height={ height || barHeight }
            onMouseLeave={ handleMouseOverBar(true) }>
            <XAxis hideTicks />
            <YAxis
                tickFormat={ (tick: string) => elipsize(tick) }
                style={ {
                    text: { fontSize: '12px', justifyContent: 'left' }
                } }
            />
            <HorizontalBarSeries
                cluster={ '1' }
                animation={ animation }
                barWidth={ barWidth || 0.8 }
                color={ behindColor }
                yDistance={ 50 }
                stroke={ color }
                data={ data.map(getBehindBars) }
                style={ {
                    rx: '7',
                    ry: '7'
                } }
            />
            <HorizontalBarSeries
                cluster={ '1' }
                animation={ animation }
                barWidth={ barWidth || 0.8 }
                data={ newData }
                yDistance={ 50 }
                color={ color }
                stroke={ color }
                onValueMouseOver={ handleMouseOverBar(false) }
                style={ {
                    rx: '7',
                    ry: '7'
                } }
                onNearestY={ handleMouseOverBar(false) }
            />
            <LabelSeries
                animation={ animation }
                data={ newData }
                getLabel={ percent && (newData => `${newData.x}%`) }
            />
            {
                hoveredBar !== INITIAL_STATE && (
                    <Hint value={ hoveredBar }>
                        <ChartsTooltip>
                            { mountTooltip(hoveredBar.y, yToolTip) }
                            { mountTooltip(hoveredBar.x, xToolTip, percent) }
                        </ChartsTooltip>
                    </Hint>
                )
            }
        </FlexibleXYPlot>
    )
}

export default HorizontalBarChart
