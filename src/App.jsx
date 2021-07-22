import React from 'react'
import theme  from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Menu from './components/drawer/Menu'
import Footer from './layout/footer/Footer'
import { title, description } from './config/Autoload'
import Routers from './route/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* main */}
      <BrowserRouter>
        <Menu title={title}/>
        <Routers/>
      </BrowserRouter>

      <Footer title={title} description={description}/>
    </ThemeProvider>
  );
}

export default App;
