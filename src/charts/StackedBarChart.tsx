import React, { useState, useCallback } from 'react'
import { IBarInfos, defaultBarInfo } from './LineVerticalBarChart'
import {
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
    Crosshair
} from 'react-vis'
import { FlexibleXYPlot } from 'react-vis/es/make-vis-flexible'
import { Wrapper } from './style'
import { getYAxis, getMaxDomain, truncate, units, TooltipText } from './AreaChart'
import { formatToBRL } from 'brazilian-values'
import { TData, TBarChart, toDate } from './SingleBarChart'
import { ChartsTooltip } from './HorizontalBarChart'
import { getBody } from './ParetoLineBarChart'

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

const toCartesianPlan = ([x,y]: TData) => ({ x, y })

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
    const [
        topBarInfo = defaultBarInfo,
        bottomBarInfo = defaultBarInfo
    ] = barsInfo || []
    const [crosshair, setCrosshair] = useState<TBarChart[]>([])
    const unit = units as { [key: string]: string }

    const stackedYAxis = getYAxis(data[1]).map(
        (value: number, index: number) => {
            return value + getYAxis(data[0])[index]
        })

    const handleMouseOver = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([topBarValues[index]])
        }, [])

    const renderPosition = () => {
        const topValues = crosshair.length && topBarValues
            .find(item => item.x === crosshair[0].x)

        const bottomValues = crosshair.length && bottomBarValues
            .find(item => item.x === crosshair[0].x)

        if (topValues && bottomValues) {
            const total = topValues.y + bottomValues.y

            return (
                <div style={ { width: '180px' } }>
                    <TooltipText>
                        {
                            topBarInfo && (topBarInfo.title + getBody(
                                topValues.y,
                                yDataType ? yDataType : 'quantity',
                                total
                            ))
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            bottomBarInfo && (bottomBarInfo.title + getBody(
                                bottomValues.y,
                                yDataType ? yDataType : 'quantity',
                                total
                            ))
                        }
                    </TooltipText>
                </div>
            )
        }

        return null
    }

    return (
        <Wrapper>
            <FlexibleXYPlot
                height={ 300 }
                stackBy='y'
                margin={ { right: 60, left: 100 } }
                xType='ordinal'
                yType='linear'
                yDomain={ [0, getMaxDomain(stackedYAxis, yDomainExtra || 50)] }
                onMouseLeave={ handleMouseOver }
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
                    onNearestXY={ handleNearMouse }
                    barWidth={ 0.3 }
                    color={ bottomBarInfo.color }
                    data={ bottomBarValues }
                />
                <VerticalBarSeries
                    barWidth={ 0.3 }
                    color={ topBarInfo.color }
                    data={ topBarValues }
                />
                <Crosshair
                    style={ { line: { backgroundColor: '#C1C1C1' } } }
                    values={ crosshair } >
                    <ChartsTooltip>
                        { renderPosition() }
                    </ChartsTooltip>
                </Crosshair>
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default StackedBarChart
