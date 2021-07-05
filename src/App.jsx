import React from 'react'
  
import theme  from './config/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Menu from './components/drawer/Menu'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu/>
    </ThemeProvider>
  );
}

export default App;
