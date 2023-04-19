/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent } from '@testing-library/dom'

function isElement(obj: any): obj is Element {
    if (typeof obj !== 'object') {
        return false
    }
    let prototypeStr: string, prototype: object | null
    do {
        prototype = Object.getPrototypeOf(obj)
        // to work in iframe
        prototypeStr = Object.prototype.toString.call(prototype)
        // '[object Document]' is used to detect document
        if (
            prototypeStr === '[object Element]' ||
            prototypeStr === '[object Document]'
        ) {
            return true
        }
        obj = prototype
        // null is the terminal of object
    } while (prototype !== null)

    return false
}

function getElementClientCenter(element: Element): { x: number; y: number } {
    const { left, top, width, height } = element.getBoundingClientRect()

    return {
        x: left + width / 2,
        y: top + height / 2
    }
}

const getCoords = (charlie?: { x: number; y: number } | Element) =>
    isElement(charlie) ? getElementClientCenter(charlie) : charlie

const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => {
        setTimeout(resolve, ms)
    })

type DragOptions = {
    to?: { x: number; y: number } | Element
    delta?: { x: number; y: number }
    steps?: number
    duration?: number
}

export default async function drag(
    element: Element,
    { to: inTo, delta, steps = 20, duration = 500 }: DragOptions = {}
): Promise<void> {
    const from = getElementClientCenter(element)
    const to = delta
        ? {
              x: from.x + delta.x,
              y: from.y + delta.y
          }
        : getCoords(inTo)

    const step = {
        x: (to?.x || 0 - from.x) / steps,
        y: (to?.y || 0 - from.y) / steps
    }

    const current = {
        clientX: from.x,
        clientY: from.y
    }

    fireEvent.mouseEnter(element, current)
    fireEvent.mouseOver(element, current)
    fireEvent.mouseMove(element, current)
    fireEvent.mouseDown(element, current)
    for (let i = 0; i < steps; i++) {
        current.clientX += step.x
        current.clientY += step.y
        await sleep(duration / steps)
        fireEvent.mouseMove(element, current)
    }
    fireEvent.mouseUp(element, current)
}
