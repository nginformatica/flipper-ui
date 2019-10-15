import React, { useState, useCallback } from 'react'
import {
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
    Crosshair
} from 'react-vis'
import { Wrapper } from '../charts/style'
import { getDomainY, TooltipText, units, truncate } from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'
import { format } from 'date-fns'

type TData = [string | Date, number]

type TBarChart = {
    x: TData[0]
    y: TData[1]
}

type TYDataType = 'hour' | 'unit' | 'percent'

interface IProps {
    width?: number
    height?: number
    color?: string
    yDataType?: TYDataType
    yTitle?: string
    xTitle?: string
    yTooltipTitle?: string
    xTooltipTitle?: string
    data: TData[]
}

const toCartesianPlan = ([x,y]: TData) => ({
    x: typeof x === 'string' ? x : format(x, 'MMM/yyyy'),
    y })

const SingleBarChart = (props: IProps) => {
    const {
        data,
        color,
        width,
        height,
        yTooltipTitle,
        xTooltipTitle,
        yTitle,
        xTitle,
        yDataType
    } = props
    const [crosshair, setCrosshair] = useState<TBarChart[]>([])
    const barData = data.map(toCartesianPlan)
    const maxValue = Math.max.apply(null, getDomainY(data))
    const unit = units as { [key: string]: string }
    const flexibleDomain = maxValue >= 20
        ? maxValue+40*(maxValue/100)
        : maxValue+5

    const handleMouseOver = () => {
        setCrosshair([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setCrosshair([barData[index]])
        }, [])

    const renderPosition = () => {
        const values = crosshair.length && barData
            .find(item => item.x === crosshair[0].x)

        return (
            <div style={ { width: '100px' } }>
                <TooltipText>
                    { xTooltipTitle + ': ' + values.x }
                </TooltipText>
                <TooltipText>
                    { yTooltipTitle + ': ' + values.y }
                </TooltipText>
            </div>
        )
    }

    return (
        <Wrapper>
            <FlexibleXYPlot
                width={ width || 300 }
                height={ height || 275 }
                yDomain={ [0, flexibleDomain] }
                onMouseLeave={ handleMouseOver }
                xType='ordinal'
                yType='linear'>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title={ xTitle } />
                <YAxis
                    title={ yTitle }
                    tickFormat={
                        (value: number) =>
                            truncate(value) + unit[yDataType || 'quantity']
                    }
                />
                <VerticalBarSeries
                    onNearestXY={ handleNearMouse }
                    barWidth={ 0.3 }
                    data={ barData }
                    color={ color || 'green' }
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

export default SingleBarChart
