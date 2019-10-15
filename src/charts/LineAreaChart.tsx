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
import { Wrapper } from './style'
import { format, parse } from 'date-fns'
import {
    truncate,
    TooltipText,
    compare,
    getMaxDomain,
    getYAxis
} from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'
import ptBR from 'date-fns/locale/pt-BR'

type TData = [number | string | Date, number]

interface IProps {
    width?: number
    height?: number
    areaColor?: string
    lineColor?: string
    areaOpacity?: number
    yDomainExtra?: number
    yDataType?: 'hour' | 'percent' | 'quantity'
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
        xTickAngle,
        referenceLine,
        referenceColor,
        referenceLegend,
        yDataType,
        yTitle,
        xTitle,
        yTooltipLegend,
        xTooltipLegend,
        yDomainExtra
    } = props
    const areaData = data.map(formatToCartesianPlan)
    const xAxisTicks = areaData.map(data => data.x)
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
            ? xTooltipLegend + ': ' +
                format(values.x as Date, 'MMM/yyyy', { locale: ptBR })
            : null
        const yValue = values
            ? yTooltipLegend + ': ' + truncate(values.y) + extension
            : null

        return (
            <div style={ { width: '110px' } }>
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
                yDomain={ [0, getMaxDomain(getYAxis(data), yDomainExtra || 30)] }
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
                    tickFormat={ tick => format(tick, 'MMM/yy', { locale: ptBR }) }
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
                    color={ areaColor }
                    data={ areaData }
                />
                <LineMarkSeries
                    onNearestX={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: lineColor } }
                    markStyle={ {
                        stroke: lineColor,
                        fill: lineColor,
                        r: 2.5
                    } }
                    data={ areaData }
                />
                {
                    referenceLine &&
                    <LineSeries
                        data={ putReference(referenceLine, areaData) }
                        color={ referenceColor }
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