const inputChangeHandle = (func: Function , index: number, history) => {
    let query: Array<string> = []

    window.location.search.substr(0).split('&').forEach(p => {
        query.push(p.replace('?', ''))    
    })

    let product = query[1]
    product = product.replace(product.substr(product.indexOf('=') + 1, product.length), index.toString())

    history.push({
        search: `?${query[0]}&${product}`
    })

    func(index)
}

export {
    inputChangeHandle
}