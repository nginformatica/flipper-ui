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
import {
    getYAxis,
    TooltipText,
    units,
    truncate,
    getMaxDomain
} from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'
import { format, parse } from 'date-fns'
import { formatToBRL } from 'brazilian-values'
import { ptBR } from 'date-fns/locale'

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
    xTickType?: 'date' | 'text'
    yDomainExtra?: number
    yTitle?: string
    xTitle?: string
    referenceLine?: number
    referenceColor?: string
    referenceLegend?: string
    yTooltipTitle?: string
    xTooltipTitle?: string
    data: TData[]
}

const toDate = (value: string, tooltip?: string) => {
    const date = parse(value as string, 'yyyy-MM-dd', new Date())
    const isTooltip = tooltip ? 'dd/MM/yyyy' : 'dd MMM'

    return format(date, isTooltip, { locale: ptBR })
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
        xTickType,
        yTooltipTitle,
        xTooltipTitle,
        yTitle,
        xTitle,
        xType,
        yDataType,
        yDomainExtra
    } = props
    const [crosshair, setCrosshair] = useState<TBarChart[]>([])
    const barData = data.map(toCartesianPlan)
    const unit = units as { [key: string]: string }

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
                        {
                            xTooltipTitle + ': ' + (
                                xTickType === 'date'
                                    ? toDate(values.x, 'tooltip')
                                    : values.x
                            )
                        }
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
                yDomain={ [0, getMaxDomain(getYAxis(data), yDomainExtra || 30)] }
                onMouseLeave={ handleMouseOver }
                xType={ xType || 'ordinal' }
                yType='linear'>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis
                    title={ xTitle }
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
