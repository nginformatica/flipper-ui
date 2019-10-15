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
import { Wrapper } from './style'
import { getYAxis, TooltipText, units, truncate } from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'
import { format } from 'date-fns'
import { formatToBRL } from 'brazilian-values'

type TData = [string | Date, number]

type TBarChart = {
    x: TData[0]
    y: TData[1]
}

interface IProps {
    width?: number
    height?: number
    color?: string
    xType?: 'ordinal' | 'time'
    yDataType?: 'hour' | 'quantity' | 'percent' | 'money'
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
        xType,
        yDataType
    } = props
    const [crosshair, setCrosshair] = useState<TBarChart[]>([])
    const barData = data.map(toCartesianPlan)
    const maxValue = Math.max.apply(null, getYAxis(data))
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

        if (values) {
            return (
                <div style={ { width: '100px' } }>
                    <TooltipText>
                        { xTooltipTitle + ': ' + values.x }
                    </TooltipText>
                    <TooltipText>
                        {
                            yTooltipTitle + ': ' + (
                                yDataType !== 'money'
                                    ? truncate(values.y) +
                                        unit[yDataType || 'quantity']
                                    : formatToBRL(values.y)
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
                margin={ { right: 40, left: 80 } }
                width={ width || 300 }
                height={ height || 275 }
                yDomain={ [0, flexibleDomain] }
                onMouseLeave={ handleMouseOver }
                xType={ xType || 'ordinal' }
                yType='linear'>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis
                    title={ xTitle }
                    style={ {
                        text: {
                            fill: 'black'
                        }
                    } }
                />
                <YAxis
                    style={ {
                        text: {
                            fill: 'black'
                        }
                    } }
                    title={ yTitle }
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
