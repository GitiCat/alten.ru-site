interface IProductCategoryTypes {
    id: number,
    name: string,
    title: string,
    descriptor: string | null,
    sub_descriptor: string | null,
    preview_image: IImageTypes | null,
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
    feature: string | null,
    main_image: IImageTypes | null,
    file: string | null,
    createdAt: Date
}

interface IVacanciesType {
    id: number,
    title: string,
    subtitle: string | null,
    city: string,
    employment: string | null,
    requirements: string | null,
    descriptor: string | null,
    created_at: Date
}

interface IApiResponseStatus {
    isError: boolean,
    statusCode: number | null
    responseMessage: string | null,
}

interface IImageTypes {
    id: number,
    image: string,
    descriptor: string,
    gallery: number,
    createdAt: Date
}

export {
    IProductCategoryTypes,
    IProductPreviewTypes,
    IVacanciesType,
    IApiResponseStatus,
    IProductTypes,
    IImageTypes
}