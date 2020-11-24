import { Provider } from 'react-redux'
import { configureStore, preloadedState } from '../store/configureStore'
const store = configureStore(preloadedState)
import * as gtag from '../lib/gtag'
import Router from 'next/router'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
