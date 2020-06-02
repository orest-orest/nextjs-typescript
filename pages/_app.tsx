import { Provider } from 'react-redux'
import { useStore } from '../store'

//@ts-ignore
export default function App ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
