import React, { useState, useCallback } from 'react'
import { equals } from 'ramda'
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
    Crosshair
} from 'react-vis'
import { Wrapper } from '../charts/style'
import { format, parse, isSameDay } from 'date-fns'
import { ChartsTooltip } from './HorizontalBarChart'
import styled from 'styled-components'
import ptBR from 'date-fns/locale/pt-BR'

type TData = [number | string | Date, number]

interface IProps {
    width?: number
    height?: number
    areaColor?: string
    lineColor?: string
    areaOpacity?: number
    yRange?: number[]
    xRange?: number[] | Date[]
    yDataType?: 'hour' | 'percent' | 'quantity'
    xTickAngle?: number
    yTitle?: string
    xTitle?: string
    yTooltipLegend?: string
    xTooltipLegend?: string
    referenceLine?: number
    referenceColor?: string
    referenceLegend?: string
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

const formatToCartesianPlan = ([x, y]: TData) => (
    {
        x: parse(x as string, 'yyyy-MM-dd', new Date()),
        y,
        style: { fontSize: 12 }
    }
)

export const truncate = (value: number) => Number(value.toFixed(2))

export const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)

export const units = {
    hour: 'h',
    percent: '%',
    quantity: ''
}

export const TooltipText = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px !important;
    color: white !important;
`

export const compare = (
    first: string | number | Date,
    second: string | number | Date
) => {
    if (first instanceof Date && second instanceof Date) {
        return isSameDay(first, second)
    }

    return equals(first, second)
}

const putReference = (
    yAxis: number,
    data: IAreaChartProps[]
) => data.map(({ x }: IAreaChartProps) => ({ x, y: yAxis }))

const AreaChart = (props: IProps) => {
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
        yDataType,
        yTitle,
        xTitle,
        yTooltipLegend,
        xTooltipLegend
    } = props
    const areaData = data.map(formatToCartesianPlan)
    const maxValue = Math.max.apply(null, getDomainY(data))
    const xAxisTicks = areaData.map(data => data.x)
    const unit = units as { [key: string]: string }
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
            ? xTooltipLegend + ': ' + format(values.x as Date, 'dd/MM/yyyy')
            : null
        const yValue = values
            ? yTooltipLegend + ': ' + truncate(values.y)
            : null

        return (
            <div style={ { width: '100px' } }>
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
                <XAxis
                    title={ xTitle || null }
                    tickLabelAngle={ xTickAngle || 0 }
                    tickValues={ xAxisTicks }
                    tickFormat={ tick => format(tick, 'dd MMM', { locale: ptBR }) }
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
                    tickFormat={
                        (value: number) =>
                            truncate(value) + unit[yDataType || 'quantity']
                    }
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
                    getLabel={
                        newData =>
                            truncate(newData.y) + unit[yDataType || 'quantity']
                    }
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

export default AreaChart
