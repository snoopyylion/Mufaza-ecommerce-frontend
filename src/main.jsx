import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/ShopContext.jsx'
import SideBarProvider from './context/SideBarContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SideBarProvider>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </SideBarProvider>
  </BrowserRouter>,
)
