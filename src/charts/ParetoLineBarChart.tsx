import React, { useState, useCallback } from 'react'
import { Wrapper } from './style'
import {
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LineMarkSeries,
    Crosshair
} from 'react-vis'
import {
    IBarInfos,
    TooltipText,
    defaultBarInfo,
    defaultChartData
} from './LineVerticalBarChart'
import { ChartsTooltip, elipsize } from './HorizontalBarChart'
import { truncate, getMaxDomain, getYAxis } from './AreaChart'
import { formatToBRL } from 'brazilian-values'

type TData = [string, number]
type TUniTypes = 'hour' | 'quantity' | 'percent' | 'money' | 'unit'

type TChartValues = {
    x: TData[0],
    y: TData[1]
}

interface IProps {
    yDataType: 'money' | 'unit'
    height?: number
    barsInfo?: [IBarInfos, IBarInfos, IBarInfos]
    yTitle?: string
    yDomainExtra?: number
    data: [TData[], TData[], TData[]]
}

const toCartesianPlan = ([x, y]: TData) => ({ x, y })
export const getBody = (y: number, type: TUniTypes, total?: number) => {
    const percent = total ? (' (' + truncate(y * (100 / total)) + '%)') : ''

    return (
        type === 'money'
            ? ': ' + formatToBRL(y) + percent
            : ': ' + y + percent
    )
}

const TwoYAxisLineBarChart = (props: IProps) => {
    const {
        height,
        data,
        barsInfo,
        yDataType,
        yTitle,
        yDomainExtra
    } = props
    const [
        lineMarkInfo = defaultBarInfo,
        topBarInfo = defaultBarInfo,
        bottomBarInfo = defaultBarInfo
    ] = barsInfo || []
    const [crosshair, setCrosshair] = useState<TChartValues[]>([])
    const bottomX = (data[2] || defaultChartData).map(toCartesianPlan)
    const topX = (data[1] || defaultChartData).map(toCartesianPlan)
    const lineMark = (data[0] || defaultChartData).map(toCartesianPlan)

    const stackedYAxis = getYAxis(data[2]).map(
        (value: number, index: number) => {
            return value + getYAxis(data[1])[index]
        })

    const handleLeaveMouse = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([lineMark[index]])
        }, [])

    const renderPosition = () => {
        const topValues = crosshair.length && lineMark
            .find(item => item.x === crosshair[0].x)

        const midValues = crosshair.length && topX
            .find(item => item.x === crosshair[0].x)

        const botValues = crosshair.length && bottomX
            .find(item => item.x === crosshair[0].x)

        if (topValues && midValues && botValues) {
            const total = midValues.y + botValues.y

            return (
                <div style={ { width: '200px' } }>
                    <TooltipText>
                        { topValues.x }
                    </TooltipText>
                    <TooltipText>
                        {
                            lineMarkInfo
                                && (lineMarkInfo.title + ': ' + topValues.y + '%')
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            topBarInfo && (topBarInfo.title + getBody(
                                midValues.y,
                                yDataType,
                                total
                            ))
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            bottomBarInfo && (bottomBarInfo.title + getBody(
                                botValues.y,
                                yDataType,
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
                height={ height || 275 }
                xType='ordinal'
                yType='linear'
                margin={ { right: 60, left: 100 } }
                onMouseLeave={ handleLeaveMouse }
                yDomain={ [0, getMaxDomain(stackedYAxis, yDomainExtra || 50)] }
                stackBy='y'>
                <HorizontalGridLines tickTotal={ bottomX.length } />
                <VerticalGridLines tickTotal={ bottomX.length } />
                <XAxis
                    tickFormat={
                        tick => elipsize(tick, 6, 3)
                    }
                    style={ {
                        text: {
                            fontSize: '12px',
                            fill: 'black'
                        }
                    } }
                />
                <YAxis
                    title={ yTitle }
                    tickFormat={
                        tick => yDataType === 'money'
                            ? formatToBRL(tick)
                            : tick
                    }
                    tickSize={ 4 }
                    style={ {
                        text: {
                            fontSize: '12px',
                            fill: 'black',
                            transform: 'translate(-4px)'
                        }
                    } }
                />
                <YAxis
                    tickFormat={ tick => tick + '%' }
                    orientation='right'
                    position='end'
                    yDomain={ [0, 100] }
                    tickSize={ -4 }
                    style={ {
                        line: { stroke: lineMarkInfo.color },
                        text: {
                            fontSize: '12px',
                            fontWeight: '300',
                            fill: lineMarkInfo.color
                        }
                    } }
                />
                <VerticalBarSeries
                    color={ bottomBarInfo.color }
                    data={ bottomX }
                />
                <VerticalBarSeries
                    color={ topBarInfo.color }
                    data={ topX }
                />
                <LineMarkSeries
                    yDomain={ [0, 100] }
                    onNearestXY={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: lineMarkInfo.color } }
                    markStyle={ {
                        stroke: lineMarkInfo.color,
                        fill: lineMarkInfo.color,
                        r: 2.5
                    } }
                    data={ lineMark }
                />
                <Crosshair
                    style={ { line: { backgroundColor: '#C1C1C1' } } }
                    values={ crosshair }>
                    <ChartsTooltip>
                        { renderPosition() }
                    </ChartsTooltip>
                </Crosshair>
            </FlexibleXYPlot>
        </Wrapper >
    )
}

export default TwoYAxisLineBarChart
