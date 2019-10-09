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
import { Wrapper } from './style'
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
    xTickAngle?: number
    referenceLine?: number
    referenceColor?: string
    referenceLegend?: string
    yDataType?: 'hour' | 'percent'
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

const formatToCartesianPlan = ([x, y]: TData) => (
    {
        x: parse(x as string, 'MM-dd-yyyy', new Date()),
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
// const getDomainX = (data: TData[]) => data.map(([x]: TData) => x)
const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)
const putReference = (
    yAxis: number,
    data: IAreaChartProps[]
) => data.map (({ x }:IAreaChartProps) => ({ x, y: yAxis }))

const AreaBarChart = (props: IProps) => {
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
        yDataType
    } = props
    const areaData = data.map(formatToCartesianPlan)
    const maxValue = Math.max.apply(null, getDomainY(data))

    const extension = yDataType === 'hour' ? 'h' : '%'
    const title = yDataType === 'hour' ? 'horas' : 'porcentagem'

    const legendInfo = [{
        title: referenceLegend || 'mark',
        color: referenceColor || 'green'
    }]

    return (
        <Wrapper>
            <FlexibleXYPlot
                margin={ { right: 20 } }
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
                    title='período'
                    tickLabelAngle={ xTickAngle || 0 }
                    tickFormat={ tick => format(tick, 'dd MMM') }
                    tickSize={ xTickAngle ? 30 : 0 }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <YAxis
                    title={ title }
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

export default AreaBarChart
