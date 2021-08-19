import * as React from "react"
import styled from 'styled-components'
import colors from '../data/colors'

const Foot = styled.footer`
	position: sticky;
	top: 100%;
	padding: 2rem;
	background: linear-gradient(0deg, ${colors.darkOrange}, ${colors.red});
	display: flex;
	justify-content: center;
	align-items: center;
`
const Content = styled.p`
	font-size: 20px;
	color: ${colors.yellow};
	text-align: center;
	font-weight: bold;
`

const Footer = () =>{

	
    return(
      <Foot>
        <Content>
			Welcome
		</Content>
      </Foot>
    )
  }

export default Footer