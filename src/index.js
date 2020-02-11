import React from 'react'
import ReactDOM from 'react-dom'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'picturefill'
import * as serviceWorker from './serviceWorker'

import './styles/index.scss'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
