import React from 'react'

export const useReducerWithMiddleware = (
    reducer: React.Reducer<any, any>,
    initialState: {},
    middlewares: Array<any>
) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const dispatchWithMiddleware = (action: any) => {
        middlewares.map((middleware) => {
            middleware(action, state)
        })

        dispatch(action)
    }

    return [state, dispatchWithMiddleware]
}