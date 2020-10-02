import item from '../../../pages/news/item'
import preview from '../../../pages/products-selected/preview'
import { ReversOrient } from './types'

export const initial = (root: HTMLElement, isRevers: boolean = false, orient: ReversOrient = ReversOrient.Even) => {
    const childrens: NodeListOf<HTMLDivElement> = root.querySelectorAll('div.arrow-block'),
        canvas: HTMLCanvasElement = root.querySelector('canvas')

    isRevers === true && setReversBlocks(orient, childrens)

    window.onresize = (e: UIEvent) => {
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
        let content: HTMLDivElement = elem.querySelector('.content')
        let bcr = content.getBoundingClientRect()
        
            
        positions.push({
            top: bcr.y,
            left: bcr.x
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

    let   startX = from['left'],
          startY = from['top'],
          endX = to['left'],
          endY = to['top']

    context.beginPath()
    context.moveTo(startX, startY)
    context.lineTo(endX, endY)
    context.stroke()
    context.closePath()
}