interface IProductSelectedFileTypes {
    name: string,
    ext: string,
    url: string
}

interface IProductSelectedContentTypes {
    title: string,
    descriptor: string,
    feature: string,
    image_url: string | null,
    files: Array<IProductSelectedContentTypes> | null
}

export {
    IProductSelectedFileTypes,
    IProductSelectedContentTypes
}