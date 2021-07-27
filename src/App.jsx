import React from 'react'
import theme  from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Menu from './components/drawer/Menu'
import Footer from './layout/footer/Footer'
import { title, description } from './config/Autoload'
import Routers from './route/Router'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Menu title={title}/>
          <Routers/>
        </BrowserRouter>
      </CartProvider>
      <Footer title={title} description={description}/>
    </ThemeProvider>
  );
}

export default App;
