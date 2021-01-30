import React from 'react'
import { Container } from "./styles/layout"
import HeaderComponent from '../header'

/**
* @author
* @function Layout
**/

function Layout ({ children }) {
  return(
    <Container>
        <HeaderComponent/>
        {children}
    </Container>
   )

 }

export default Layout