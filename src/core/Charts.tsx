import React, { FC } from 'react'
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries
} from 'react-vis'

type IData = {
    x: string | number
    y: number
}

interface IProps {
    gridLines: boolean
    data: IData[]
    chartType?: 'area' | 'line' | 'bar'
    width?: number
    height?: number
    xLabelType?: 'ordinal'
}

export const Charts: FC<IProps> = props =>
    <XYPlot
        xType={ props.xLabelType || 'ordinal' }
        width={ props.width || 300 }
        height={ props.height || 200 }>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={ props.data } />
    </XYPlot>

