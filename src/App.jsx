import React from 'react'
  
import theme  from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Menu from './components/drawer/Menu'
import Footer from './views/footer/Footer'
import { title, description } from './config/Autoload'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu title={title}/>
      {/* main */}
      <Footer title={title} description={description}/>
    </ThemeProvider>
  );
}

export default App;
