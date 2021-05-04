interface IProductCategoryTypes {
    id: number,
    name: string,
    title: string,
    descriptor: string | null,
    createdAt: Date
}

interface IProductTypes {
    id: number,
    name: string,
    title: string,
    category: number,
    descriptor: string | null,
    features: string | null,
    //main_image
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
    IProductTypes,
    IApiResponseStatus
}