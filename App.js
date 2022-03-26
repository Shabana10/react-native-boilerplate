// import { style } from './styling/styling'

import React, {useEffect} from 'react'
import { Provider } from 'react-redux'
import AppNavigation from './config/navigation'
import store from './config/redux/store'
// const styles = StyleSheet.create(style)

export default function App() {
   
    return <>
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    </>
}