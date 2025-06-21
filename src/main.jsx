import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApplicationProvider } from './state/Application/ApplicationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </StrictMode>,
)
