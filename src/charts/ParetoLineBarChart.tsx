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
import { truncate } from './AreaChart'
import { formatToBRL } from 'brazilian-values'

type TData = [string, number]

type TChartValues = {
    x: TData[0],
    y: TData[1]
}

type TYDataType = 'money' | 'unit'

interface IProps {
    yDataType: TYDataType
    width?: number
    height?: number
    barsInfo?: IBarInfos[]
    yTitle?: string
    data: TData[][]
}

const toCartesianPlan = ([x, y]: TData) => ({ x, y })
const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)
const getBody = (y: number, type: TYDataType, total?: number) => {
    const percent = total ? (' (' + truncate(y * (100 / total)) + '%)') : ''

    return (
        type === 'money'
            ? ': ' + formatToBRL(y) + percent
            : ': ' + y + percent
    )
}

const TwoYAxisLineBarChart = (props: IProps) => {
    const { width, height, data, barsInfo, yDataType, yTitle } = props
    const firstX = data[2].map(toCartesianPlan)
    const secondX = data[1].map(toCartesianPlan)
    const lineMark = data[0].map(toCartesianPlan)
    const maxValeuFirstX = Math.max.apply(null, getDomainY(data[2]))
    const maxValeuSecondX = Math.max.apply(null, getDomainY(data[1]))
    const maxDomain = (maxValeuFirstX + maxValeuSecondX)+100
    const [crosshair, setCrosshair] = useState<TChartValues[]>([])

    const handleLeaveMouse = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([firstX[index]])
        }, [])

    const renderPosition = () => {
        const topValues = crosshair.length && lineMark
            .find(item => item.x === crosshair[0].x)

        const midValues = crosshair.length && secondX
            .find(item => item.x === crosshair[0].x)

        const botValues = crosshair.length && firstX
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
                yDomain={ [0, maxDomain] }
                stackBy='y'>
                <HorizontalGridLines tickTotal={ firstX.length } />
                <VerticalGridLines tickTotal={ firstX.length } />
                <XAxis />
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
                    data={ firstX }
                />
                <VerticalBarSeries
                    color={ barsInfo[1].color }
                    data={ secondX }
                />
                <LineMarkSeries
                    yDomain={ [0, 100] }
                    onNearestXY={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: barsInfo[0].color || '#004A7C' } }
                    markStyle={ {
                        stroke: barsInfo[0].color || '#004A7C',
                        fill: barsInfo[0].color || '#004A7C',
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
