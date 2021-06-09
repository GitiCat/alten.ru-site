import { IImageTypes } from './api-types'

interface IProductSelectedFileTypes {
    name: string,
    ext: string,
    url: string
}

interface IProductSelectedContentTypes {
    title: string,
    descriptor: string,
    feature: string,
    image: IImageTypes | null,
    files: Array<IProductSelectedContentTypes> | null
}

export {
    IProductSelectedFileTypes,
    IProductSelectedContentTypes
}