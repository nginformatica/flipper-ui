import React, { useState, useCallback } from 'react'
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries,
    LineMarkSeries,
    LineSeries,
    LabelSeries,
    DiscreteColorLegend,
    Crosshair
} from 'react-vis'
import { Wrapper } from '../charts/style'
import { format, parse } from 'date-fns'
import { truncate, TooltipText, compare } from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'

type TData = [number | string | Date, number]

interface IProps {
    width?: number
    height?: number
    areaColor?: string
    lineColor?: string
    areaOpacity?: number
    yRange?: number[]
    xRange?: number[] | Date[]
    yDataType?: 'hour' | 'percent'
    xTickAngle?: number
    yTitle?: string
    xTitle?: string
    referenceLine?: number
    referenceColor?: string
    referenceLegend?: string
    yTooltipLegend?: string
    xTooltipLegend?: string
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

export const toDate =
    (x: string) => parse(x as string, 'yyyy-MM-dd HH:mm', new Date())

const formatToCartesianPlan = ([x, y]: TData) => (
    {
        x: toDate(x as string),
        y,
        style: { fontSize: 12 }
    }
)

const legendPosition = {
    position: 'absolute',
    right: '18px',
    top: '0px'
}

const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)
const putReference = (
    yAxis: number,
    data: IAreaChartProps[]
) => data.map(({ x }: IAreaChartProps) => ({ x, y: yAxis }))

const LineAreaChart = (props: IProps) => {
    const {
        width,
        height,
        data,
        areaColor,
        lineColor,
        areaOpacity,
        yRange,
        xTickAngle,
        referenceLine,
        referenceColor,
        referenceLegend,
        yDataType,
        yTitle,
        xTitle,
        yTooltipLegend,
        xTooltipLegend
    } = props
    const areaData = data.map(formatToCartesianPlan)
    const xAxisTicks = areaData.map(data => data.x)
    const maxValue = Math.max.apply(null, getDomainY(data))
    const extension = yDataType === 'hour' ? 'h' : '%'
    const legendInfo = [{
        title: referenceLegend || 'mark',
        color: referenceColor || 'green'
    }]
    const [hoveredValue, setHoveredValue] =
        useState<{ x: TData[0], y: TData[1] }[]>([])

    const handleLeaveMouse = () => {
        setHoveredValue([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setHoveredValue([areaData[index]])
        }, [])

    const renderPosition = () => {
        const values = hoveredValue.length && areaData
            .find(item => compare(item.x, hoveredValue[0].x))

        const xValue = values
            ? xTooltipLegend + ': ' + format(values.x as Date, 'MMM/yyyy')
            : null
        const yValue = values
            ? yTooltipLegend + ': ' + truncate(values.y) + extension
            : null

        return (
            <div style={ { width: '80px' } }>
                <TooltipText>
                    { xValue }
                </TooltipText>
                <TooltipText>
                    { yValue }
                </TooltipText>
            </div>
        )
    }

    return (
        <Wrapper>
            <FlexibleXYPlot
                margin={ { right: 24, left: 44 } }
                yDomain={ yRange || [0, maxValue + 10] }
                xType='time'
                yType='linear'
                onMouseLeave={ handleLeaveMouse }
                width={ width || 600 }
                height={ height || 275 }>
                <VerticalGridLines tickTotal={ areaData.length } />
                <HorizontalGridLines />
                {
                    referenceLine && <DiscreteColorLegend
                        style={ legendPosition }
                        items={ legendInfo }
                    />
                }
                <XAxis
                    title={ xTitle || null }
                    tickValues={ xAxisTicks }
                    tickFormat={ tick => format(tick, 'MMM/yy') }
                    tickLabelAngle={ xTickAngle || 0 }
                    tickSize={ xTickAngle ? 30 : 0 }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <YAxis
                    title={ yTitle || null }
                    tickFormat={ (value: number) => truncate(value) + extension }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <AreaSeries
                    opacity={ areaOpacity || 0.8 }
                    color={ areaColor || '#29B6F6' }
                    data={ areaData }
                />
                <LineMarkSeries
                    onNearestX={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: lineColor || '#004A7C' } }
                    markStyle={ {
                        stroke: lineColor || '#004A7C',
                        fill: lineColor || '#004A7C',
                        r: 2.5
                    } }
                    data={ areaData }
                />
                {
                    referenceLine &&
                    <LineSeries
                        data={ putReference(referenceLine, areaData) }
                        color={ referenceColor || 'green' }
                    />
                }
                <LabelSeries
                    data={ areaData }
                    getLabel={ newData => truncate(newData.y) + extension }
                />
                <Crosshair
                    style={ { line: { backgroundColor: '#C1C1C1' } } }
                    values={ hoveredValue }>
                    <ChartsTooltip>
                        { renderPosition() }
                    </ChartsTooltip>
                </Crosshair>
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default LineAreaChart
