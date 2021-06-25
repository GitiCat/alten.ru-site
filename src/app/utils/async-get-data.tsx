type PromiseMessageTypes = {
	status: number
	message: string
	data: {}
}

const promiseMessage = ({ status, message, data }: PromiseMessageTypes): PromiseMessageTypes => ({
	status,
	message,
	data,
})

const encodeQueryData = (data: {}) => {
	const ret = []
	for (const key in data) {
		ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
	}
	return ret.join('&')
}

type AsyncGetMethodTypes = {
	api_v: number
	url: string
	params?: {}
}

const getAsyncData = async (props: AsyncGetMethodTypes): Promise<PromiseMessageTypes> => {
	const xhr: XMLHttpRequest = new XMLHttpRequest()

	let url = `/api_v${props.api_v}/${props.url}`
	if (props.params != null) {
		url += `?${encodeQueryData(props.params)}`
	}

	return new Promise((resolve, reject) => {
		xhr.open('GET', url, true)
		xhr.setRequestHeader('Accept', 'text/plain')
		xhr.setRequestHeader('Content-Type', 'text/json;charset=utf-8')

		xhr.send()

		xhr.onload = () => {
			if (xhr.status == 200) {
				return resolve(promiseMessage({ status: xhr.status, message: xhr.statusText, data: JSON.parse(xhr.responseText) }))
			}
			return reject(promiseMessage({ status: xhr.status, message: xhr.statusText, data: null }))
		}

		xhr.onerror = () => reject(promiseMessage({ status: xhr.status, message: xhr.statusText, data: null }))
	})
}

export { getAsyncData }
