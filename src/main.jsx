import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'


import './index.css'
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NextUIProvider>
  <div className="dark text-foreground bg-background min-h-screen">
          <App/>
        </div>
    </NextUIProvider>
    
  </StrictMode>,
)
