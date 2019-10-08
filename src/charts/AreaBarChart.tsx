import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries,
    LineMarkSeries,
    LabelSeries
} from 'react-vis'
import { Wrapper } from './style'
import { format } from 'date-fns'
import { head, last } from 'ramda'

type TData = [number | string | Date | null, number | null]

interface IProps {
    width?: number
    height?: number
    areaColor?: string
    lineColor?: string
    areaOpacity?: number
    yRange?: number[]
    xTickAngle?: number
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

const formatToCartesianPlan = ([x, y]: TData) => ({ x, y, style: { fontSize: 12 } })

const getDomainX = (data: TData[]) => data.map(([x]: TData) => x)
const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)

const AreaBarChart = (props: IProps) => {
    const {
        width,
        height,
        data,
        areaColor,
        lineColor,
        areaOpacity,
        yRange,
        xTickAngle
    } = props
    const areaData = data.map(formatToCartesianPlan)
    const maxValue = Math.max.apply(null, getDomainY(data))

    return (
        <Wrapper>
            <XYPlot
                title='horas'
                yDomain={ yRange || [0, maxValue] }
                xDomain={ [head(getDomainX(data)), last(getDomainX(data))] }
                xType='time'
                yType='linear'
                width={ width || 600 }
                height={ height || 275 }>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                    title='período'
                    tickLabelAngle={ xTickAngle || 0 }
                    tickFormat={ (tick: Date) => format(tick, 'dd MMM') }
                    tickSize={ xTickAngle ? 30 : 0 }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <YAxis
                    title='horas'
                    tickFormat={ (hour: string) => hour+'h' }
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
                        strokeLinejoin: 'round',
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
                <LabelSeries
                    data={ areaData }
                    getLabel={ (newData => `${newData.y}h`) }
                />
            </XYPlot>
        </Wrapper>
    )
}

export default AreaBarChart
