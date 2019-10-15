import React, { useState, useCallback } from 'react'
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LineMarkSeries,
    DiscreteColorLegend,
    Crosshair
} from 'react-vis'
import { toDate } from './LineAreaChart'
import { format } from 'date-fns'
import { Wrapper } from './style'
import { ChartsTooltip } from './HorizontalBarChart'
import styled from 'styled-components'
import { formatToBRL } from 'brazilian-values'
import ptBR from 'date-fns/locale/pt-BR'
import { getMaxDomain, getYAxis } from './AreaChart'

type TData = [string, number]

export interface IBarInfos {
    title: string
    color: string
}

interface IProps {
    yDataType: 'money' | 'quantity'
    width?: number
    height?: number
    yTitle?: string[]
    barsInfo?: IBarInfos[]
    yDomainExtra?: number
    data: TData[][]
}

export const TooltipText = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: white;
`

const toCartesianPlan = ([x, y]: TData) => ({
    x: format(toDate(x), 'MMM/yy', { locale: ptBR }),
    y
})

const styleLegend = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '-14px'
}

export const defaultBarInfo = { color: '', title: '' }
export const defaultChartData = [['', 0]]

const LineVerticalBarChart = (props: IProps) => {
    const { width, height, data, yTitle, barsInfo, yDataType, yDomainExtra } = props
    const [
        bottomBarInfo = defaultBarInfo,
        topBarInfo = defaultBarInfo,
        lineMarkInfo = defaultBarInfo
    ] = barsInfo || []
    const firstX = (data[0] || defaultChartData).map(toCartesianPlan)
    const secondX = (data[1] || defaultChartData).map(toCartesianPlan)
    const lineMark = (data[2] || defaultChartData).map(toCartesianPlan)
    const [crosshair, setCrosshair] = useState<{ x: TData[0], y: TData[1] }[]>([])

    const handleLeaveMouse = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([firstX[index]])
        }, [])

    const renderPosition = () => {
        const positionFirst = crosshair.length && firstX
            .find(item => item.x === crosshair[0].x)

        const positionSecond = crosshair.length && secondX
            .find(item => item.x === crosshair[0].x)

        const positionMark = crosshair.length && lineMark
            .find(item => item.x === crosshair[0].x)

        if (positionFirst && positionSecond && positionMark) {
            return (
                <div style={ { width: '180px' } }>
                    <TooltipText>
                        { positionFirst.x }
                    </TooltipText>
                    <TooltipText>
                        {
                            bottomBarInfo && (
                                bottomBarInfo.title + ': ' +
                                formatToBRL(positionFirst.y)
                            )
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            topBarInfo && (
                                topBarInfo.title + ': ' +
                                formatToBRL(positionSecond.y)
                            )
                        }
                    </TooltipText>
                    <TooltipText>
                        {
                            lineMarkInfo && (
                                lineMarkInfo.title + ': ' +
                                formatToBRL(positionMark.y)
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
                widht={ width || 400 }
                height={ height || 275 }
                xType='ordinal'
                yType='linear'
                yDomain={ [
                    0,
                    getMaxDomain(getYAxis(data[2]), yDomainExtra || 10)
                ] }
                margin={ { right: 40, left: 80 } }
                onMouseLeave={ handleLeaveMouse }
                stackBy='y'>
                <HorizontalGridLines />
                <VerticalGridLines tickTotal={ firstX.length } />
                <XAxis
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <YAxis
                    title={ yTitle }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                    tickFormat={
                        tick => yDataType === 'money'
                            ? formatToBRL(tick)
                            : tick
                    }
                />
                <VerticalBarSeries
                    barWidth={ 0.7 }
                    data={ firstX }
                    color={ bottomBarInfo.color }
                />
                <VerticalBarSeries
                    barWidth={ 0.7 }
                    data={ secondX }
                    color={ topBarInfo.color }
                />
                <LineMarkSeries
                    data={ lineMark }
                    onNearestX={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: lineMarkInfo.color || '#004A7C' } }
                    markStyle={ {
                        stroke: lineMarkInfo.color || '#004A7C',
                        fill: lineMarkInfo.color || '#004A7C',
                        r: 2.5
                    } }
                />
                <DiscreteColorLegend
                    orientation='horizontal'
                    className='vertical-chart-legend'
                    style={ styleLegend }
                    items={ barsInfo }
                />
                <Crosshair
                    style={ { line: { backgroundColor: '#C1C1C1' } } }
                    values={ crosshair }>
                    <ChartsTooltip>
                        { renderPosition() }
                    </ChartsTooltip>
                </Crosshair>
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default LineVerticalBarChart
