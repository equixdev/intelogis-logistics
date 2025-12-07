import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import 'leaflet/dist/leaflet.css'
import 'antd/dist/reset.css'
import { store } from './store'
import offers from './offers.json'
import { selectOffer, useAppDispatch } from './store'
import { Sidebar } from './components/Sidebar'
import { Map } from './components/Map'
import { SplitView } from './components/SplitView'

const App = () => {
  const dispatch = useAppDispatch()
  dispatch(selectOffer(offers[0]))
  return (
    <SplitView left={<Sidebar />} right={<Map/>}/>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
