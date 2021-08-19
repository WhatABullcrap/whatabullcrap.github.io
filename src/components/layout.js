import * as React from "react"
import styled from 'styled-components'
import Header from "./header"
import Footer from './footer'
import colors from '../data/colors'

const flexCenter = `display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Container = styled.div`
  	width: 100%;
  	min-height: 100vh;
  	position: relative;
  	background-color: ${colors.black};
	overflow: hidden;
`
const ContainerContent = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	${flexCenter}
`

const Layout = ({children}) =>{
    
    return(
      <Container>
        <Header />
          <ContainerContent>
		 	{children}
		  </ContainerContent>
        <Footer />
      </Container>
    )
  }

export default Layout