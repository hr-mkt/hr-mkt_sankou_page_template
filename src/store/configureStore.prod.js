import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {middlewares} from '../middlewares'
import rootReducer from '../reducers'

import path from 'path'

export const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                middlewares,
            )
        ),
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}

export const preloadedState = {
    app: {}
}
