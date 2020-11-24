const mws = {
    middleware: {}
}

const getMiddleware = (action) => {
    for (const middleware in mws) {
        if (mws[middleware][action]) { return mws[middleware][action] }
    }
    return null
}

export const middlewares = store => next => action => {
    const middleware = getMiddleware(action.type)
    if (!middleware) { return next(action) }
    return middleware(store, next, action)
}
