export type StyleChangeTypes = {
    element: React.ReactElement,
    style: React.CSSProperties | null
}

export type StyleElementTypes = {
    startIndex: number,
    speed: number,
    step: number,
    nodes?: React.ReactNode
}