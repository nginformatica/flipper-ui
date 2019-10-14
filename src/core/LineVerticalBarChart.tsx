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
import { Wrapper } from '../charts/style'
import { ChartsTooltip } from './HorizontalBarChart'
import styled from 'styled-components'
import { formatToBRL } from 'brazilian-values'
import ptBR from 'date-fns/locale/pt-BR'

type TData = [string, number]

export interface IBarInfos {
    title: string
    color: string
}

interface IProps {
    yDataType: 'money'
    width?: number
    height?: number
    yTitle?: string[]
    barsInfo?: IBarInfos[]
    data: TData[][]
}

export const TooltipText = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px !important;
    color: white !important;
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
    marginTop: '-10px'
}

const LineVerticalBarChart = (props: IProps) => {
    const { width, height, data, yTitle, barsInfo, yDataType } = props
    const firstX = data[0].map(toCartesianPlan)
    const secondX = data[1].map(toCartesianPlan)
    const lineMark = data[2].map(toCartesianPlan)
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
                        { `${barsInfo[0].title}: ${formatToBRL(positionFirst.y)}` }
                    </TooltipText>
                    <TooltipText>
                        { `${barsInfo[1].title}: ${formatToBRL(positionSecond.y)}` }
                    </TooltipText>
                    <TooltipText>
                        { `${barsInfo[2].title}: ${formatToBRL(positionMark.y)}` }
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
                margin={ { right: 40, left: 80 } }
                onMouseLeave={ handleLeaveMouse }
                stackBy='y'>
                <HorizontalGridLines />
                <VerticalGridLines tickTotal={ firstX.length } />
                <XAxis />
                <YAxis
                    title={ yTitle }
                    tickFormat={
                        tick => yDataType === 'money'
                            ? formatToBRL(tick)
                            : tick
                    }
                />
                <VerticalBarSeries
                    barWidth={ 0.7 }
                    data={ firstX }
                    color={ barsInfo[0].color }
                />
                <VerticalBarSeries
                    barWidth={ 0.7 }
                    data={ secondX }
                    color={ barsInfo[1].color }
                />
                <LineMarkSeries
                    data={ lineMark }
                    onNearestX={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: barsInfo[2].color || '#004A7C' } }
                    markStyle={ {
                        stroke: barsInfo[2].color || '#004A7C',
                        fill: barsInfo[2].color || '#004A7C',
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
