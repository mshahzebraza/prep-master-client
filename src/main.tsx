import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0AuthProvider } from './application/hooks/useAuth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0AuthProvider>
    <App />
    </Auth0AuthProvider>
  </StrictMode>,
)
