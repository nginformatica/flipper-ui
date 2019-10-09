import React from 'react'
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
    DiscreteColorLegend
} from 'react-vis'
import { Wrapper } from '../charts/style'
import { format, parse } from 'date-fns'

type TData = [number | string | Date | null, number | null]

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
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

const toDate = (x: string) => parse(x as string, 'yyyy-MM-dd HH:mm', new Date())

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

const truncate = (value: number) => Number(value.toFixed(2))
const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)
const putReference = (
    yAxis: number,
    data: IAreaChartProps[]
) => data.map (({ x }:IAreaChartProps) => ({ x, y: yAxis }))

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
        xTitle
    } = props

    const areaData = data.map(formatToCartesianPlan)
    const xAxisTicks = areaData.map(data => data.x)
    console.log(xAxisTicks)

    const maxValue = Math.max.apply(null, getDomainY(data))
    const extension = yDataType === 'hour' ? 'h' : '%'
    const legendInfo = [{
        title: referenceLegend || 'mark',
        color: referenceColor || 'green'
    }]

    return (
        <Wrapper>
            <FlexibleXYPlot
                margin={ { right: 24 } }
                yDomain={ yRange || [0, maxValue+10] }
                xType='time'
                yType='linear'
                width={ width || 600 }
                height={ height || 275 }>
                <VerticalGridLines />
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
                    tickFormat={ (value: number) => truncate(value)+extension }
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
                    getLabel={ (newData => truncate(newData.y)+extension) }
                />
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default LineAreaChart
