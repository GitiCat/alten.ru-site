import axios, { AxiosPromise } from 'axios';

type AsyncGetMethodTypes = {
    api_v: number
    url: string,
    params?: {}
}

const getAsyncData = async (props: AsyncGetMethodTypes): Promise<[string, string | number]> => {
    const result = await axios({
        method: 'GET',
        url: `/api_v${props.api_v}/${props.url}`,
        params: props.params,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })

    return Promise.resolve(result.data)
}

export { getAsyncData }