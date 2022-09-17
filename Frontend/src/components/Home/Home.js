import React from 'react'
import Navh from '../Nav/Navh'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Devices from '../Mainsection/Devices'

function Home() {
  return (
    <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
          >
            
            <Navh/>
            <Devices/>

        </ThemeProvider>
    
  )
}

export default Home