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
import { IBarInfos, TooltipText } from './LineVerticalBarChart'
import { ChartsTooltip } from './HorizontalBarChart'
import { truncate, getMaxDomain, getYAxis } from './AreaChart'
import { formatToBRL } from 'brazilian-values'

type TData = [string, number]

type TChartValues = {
    x: TData[0],
    y: TData[1]
}

interface IProps {
    yDataType: 'money' | 'unit'
    width?: number
    height?: number
    barsInfo?: IBarInfos[]
    yTitle?: string
    yDomainExtra?: number
    data: TData[][]
}

const toCartesianPlan = ([x, y]: TData) => ({ x, y })
const getBody = (y: number, type: 'money' | 'unit', total?: number) => {
    const percent = total ? (' (' + truncate(y * (100 / total)) + '%)') : ''

    return (
        type === 'money'
            ? ': ' + formatToBRL(y) + percent
            : ': ' + y + percent
    )
}

const TwoYAxisLineBarChart = (props: IProps) => {
    const { width, height, data, barsInfo, yDataType, yTitle, yDomainExtra } = props
    const [crosshair, setCrosshair] = useState<TChartValues[]>([])
    const bottomX = data[2].map(toCartesianPlan)
    const topX = data[1].map(toCartesianPlan)
    const lineMark = data[0].map(toCartesianPlan)
    const stackedYAxis = getYAxis(data[2]).map(
        (value: number, index: number) => {
            return value + getYAxis(data[1])[index]
        })

    const handleLeaveMouse = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([bottomX[index]])
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
                        { barsInfo[0].title + ': ' + topValues.y + '%' }
                    </TooltipText>
                    <TooltipText>
                        {
                            barsInfo[1].title + getBody(
                                midValues.y,
                                yDataType,
                                total
                            )
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            barsInfo[2].title + getBody(
                                botValues.y,
                                yDataType,
                                total
                            )
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
                width={ width || 275 }
                xType='ordinal'
                yType='linear'
                margin={ { right: 40, left: 80 } }
                onMouseLeave={ handleLeaveMouse }
                yDomain={ [0, getMaxDomain(stackedYAxis, yDomainExtra || 50)] }
                stackBy='y'>
                <HorizontalGridLines tickTotal={ bottomX.length } />
                <VerticalGridLines tickTotal={ bottomX.length } />
                <XAxis
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
                    left={ (width - 120) }
                    yDomain={ [0, 100] }
                    tickSize={ 4 }
                    style={ {
                        line: { stroke: barsInfo[0].color },
                        text: {
                            transform: 'translate(32px)',
                            fontSize: '12px',
                            fontWeight: '300',
                            fill: barsInfo[0].color
                        }
                    } }
                />
                <VerticalBarSeries
                    color={ barsInfo[2].color }
                    data={ bottomX }
                />
                <VerticalBarSeries
                    color={ barsInfo[1].color }
                    data={ topX }
                />
                <LineMarkSeries
                    yDomain={ [0, 100] }
                    onNearestXY={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: barsInfo[0].color } }
                    markStyle={ {
                        stroke: barsInfo[0].color,
                        fill: barsInfo[0].color,
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
