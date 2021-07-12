import React from 'react'
  
import theme  from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Menu from './components/drawer/Menu'
import Footer from './views/Footer'
import { title, description } from './config/Autoload'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu/>
      {/* main */}
      <Footer title={title} description={description}/>
    </ThemeProvider>
  );
}

export default App;
