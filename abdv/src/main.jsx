import { createApp } from 'react'
import App from './App.jsx'
import './index.css'

createApp(App).mount('#app')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
