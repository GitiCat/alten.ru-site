import { ReversOrient } from './types'

const DEFAULT_TRANSLATE_X = .25,
      DEFAULT_TRANSLATE_Y = .15

export const initial = (root: HTMLElement, isRevers: boolean = false, orient: ReversOrient = ReversOrient.Even) => {
    const childrens: NodeListOf<HTMLDivElement> = root.querySelectorAll('div.arrow-block'),
        canvas: HTMLCanvasElement = root.querySelector('canvas')

    isRevers === true && setReversBlocks(orient, childrens)

    window.onresize = () => {
        canvasResize(canvas, canvas.clientWidth, canvas.clientHeight)
        canvasDrawWithArray(canvas, childrens)
    }
    canvasResize(canvas, root.clientWidth, root.clientHeight)
    canvasDrawWithArray(canvas, childrens)
}

const canvasResize = (canvas: HTMLCanvasElement, width: number, height: number) => {
    canvas.width = width
    canvas.height = height
}

/**
 * Setting revers classes on children blocks in root block
 * @param orient Revers start in the list of items
 * @param blocks Blocks collection for revers
 */
const setReversBlocks = (orient: ReversOrient, blocks: NodeListOf<HTMLDivElement>) => {
    switch (orient) {
        case ReversOrient.Even:
            Array.from(blocks).map((block, index) => index % 2 == 0 && block.classList.add('revers'))
            break

        case ReversOrient.Odd:
            Array.from(blocks).map((block, index) => index % 2 != 0 && block.classList.add('revers'))
            break

        default:
            throw new Error('Set revers orient error: not type selected...')
    }
}

/**
 * Get elements position relative of root elements
 * @param elems Blocks collection in root
 */
const getElementsPosition = (elems: NodeListOf<HTMLDivElement>): Array<{}> => {
    let positions: Array<{}> = []

    elems.forEach(elem => {
        const content: HTMLDivElement = elem.querySelector('.content')
        const isRevers: boolean = content.parentElement.classList.contains('revers')
        
        const t: number = content.offsetTop,
              l: number = content.offsetLeft,
              w: number = content.getBoundingClientRect().width,
              h: number = content.getBoundingClientRect().height

        const fromY = t + h + (h - (h - (h * DEFAULT_TRANSLATE_Y))),
              fromX = isRevers == false
              ? l - (w - (w - (w * DEFAULT_TRANSLATE_X))) + (w / 2)
              : l + (w - (w - (w * DEFAULT_TRANSLATE_X))) + (w / 2)

        const toY = t + (h / 2) + (h - (h - (h * DEFAULT_TRANSLATE_Y))),
              toX = isRevers == false
              ? l - (w - (w - (w * DEFAULT_TRANSLATE_X))) + w
              : l + (w - (w - (w * DEFAULT_TRANSLATE_X))) 

        positions.push({
            fromX: fromX,
            fromY: fromY,
            toX: toX,
            toY: toY
        })
    })

    return positions
}

const canvasDrawWithArray = (canvas: HTMLCanvasElement, childrens: NodeListOf<HTMLDivElement>) => {
    Array.from(getElementsPosition(childrens)).reduce((prev, curr) => {
        drawCanvasLine(canvas, prev, curr)
        return curr
    })
}

const drawCanvasLine = (canvas: HTMLCanvasElement, from: {}, to: {}) => {
    const context = canvas.getContext('2d');

    let startX = from['fromX'],
        startY = from['fromY'],
        endX = to['toX'],
        endY = to['toY']

    context.beginPath()
    context.lineWidth = 4
    context.strokeStyle = '#003fb2'
    context.moveTo(startX, startY)
    context.bezierCurveTo(startX, endY, startX, endY, endX, endY)
    context.stroke()
    context.closePath()
}