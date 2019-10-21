import React from 'react'
import { IBarInfos, defaultBarInfo } from './LineVerticalBarChart'
import {
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries
} from 'react-vis'
import { Wrapper } from './style'
import { getYAxis, getMaxDomain, truncate, units } from './AreaChart'
import { toDate } from './LineAreaChart'
import { formatToBRL } from 'brazilian-values'

type TData = [string, number]

interface IProps {
    height?: number
    yDomainExtra?: number
    yTitle?: string
    xTitle?: string
    yDataType?: 'hour' | 'quantity' | 'percent' | 'money'
    xTickType?: 'date' | 'text'
    barsInfo?: [IBarInfos, IBarInfos]
    data: [TData[], TData[]]
}

const defaultBar = [{ x: '', y: 0 }]

const toCartesianPlan = ([x,y]: TData) => ({
    x,
    y
})

const StackedBarChart = (props: IProps) => {
    const {
        barsInfo,
        data,
        yTitle,
        xTitle,
        yDomainExtra,
        xTickType,
        yDataType
    } = props
    const topBarValues = data[0] ? data[0].map(toCartesianPlan) : defaultBar
    const bottomBarValues = data[1] ? data[1].map(toCartesianPlan) : defaultBar
    const unit = units as { [key: string]: string }
    const [
        topBarInfo = defaultBarInfo,
        bottomBarInfo = defaultBarInfo
    ] = barsInfo || []

    const stackedYAxis = getYAxis(data[1]).map(
        (value: number, index: number) => {
            return value + getYAxis(data[0])[index]
        })

    return (
        <Wrapper>
            <FlexibleXYPlot
                height={ 300 }
                stackBy='y'
                margin={ { right: 60, left: 100 } }
                xType='ordinal'
                yType='linear'
                yDomain={ [0, getMaxDomain(stackedYAxis, yDomainExtra || 50)] }
                stackedBy='y'>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis
                    title={ yTitle }
                    tickFormat={
                        (value: string) =>
                            xTickType === 'date'
                                ? toDate(value)
                                : value
                    }
                    style={ {
                        text: {
                            fill: 'black'
                        }
                    } }
                />
                <YAxis
                    title={ xTitle }
                    style={ {
                        text: {
                            fill: 'black'
                        }
                    } }
                    tickFormat={
                        (value: number) =>
                            yDataType !== 'money'
                                ? truncate(value) + unit[yDataType || 'quantity']
                                : formatToBRL(value)
                    }
                />
                <VerticalBarSeries
                    barWidth={ 0.3 }
                    color={ bottomBarInfo.color }
                    data={ bottomBarValues }
                />
                <VerticalBarSeries
                    barWidth={ 0.3 }
                    color={ topBarInfo.color }
                    data={ topBarValues }
                />
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default StackedBarChart
