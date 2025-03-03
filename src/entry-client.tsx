import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App />
  </StrictMode>,
)


// https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-react-ts/src/entry-server.tsx
// https://vite.dev/guide/ssr#building-for-production