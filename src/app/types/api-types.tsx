interface IProductCategoryTypes {
    id: number,
    name: string,
    title: string,
    descriptor: string | null,
    sub_descriptor: string | null,
    preview_image: {
        id: number,
        image: string,
        descriptor: string,
        gallery: number,
        createdAt: Date
    } | null,
    createdAt: Date
}

interface IProductPreviewTypes {
    id: number,
    title: string,
    image_url: string
}

interface IProductTypes {
    id: number,
    name: string,
    title: string,
    category: number,
    descriptor: string | null,
    features: string | null,
    main_image: {
        id: number,
        image: string,
        descriptor: string,
        gallery: number,
        createdAt: Date
    } | null,
    file: string | null,
    createdAt: Date
}

interface IApiResponseStatus {
    isError: boolean,
    statusCode: number | null
    responseMessage: string | null,
}

export {
    IProductCategoryTypes,
    IProductPreviewTypes,
    IApiResponseStatus,
    IProductTypes
}