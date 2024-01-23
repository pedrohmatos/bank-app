import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes.tsx'
import GlobalStyle from './styles/Global/index.ts'
import { ExtratoProvider } from './context/ExtratoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ExtratoProvider>
      <App />
    </ExtratoProvider>
  </React.StrictMode>,
)
