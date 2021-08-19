import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import '../styles/herosection.scss'
import fullLogo from '../images/svg/fullLogo.svg'
import colors from '../data/colors'
import arrow from '../images/svg/Arrow.svg'

const flexCenter = `display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Bounce = keyframes`
	0%,10%, 20%, 50%, 70%, 80%, 90%, 100% {transform: translateY(0);} 
	40% {transform: translateY(-30px);} 
	60% {transform: translateY(-15px);} 
`

const Container = styled.header`
  	width: 100%;
  	min-height: 100vh;
  	position: relative;
	${flexCenter}
	&:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
		background-color: #00000024;
	}
`
const Waves = styled.svg`
	position: absolute;
	bottom: 0;
	transform: scaleX(-1);
	z-index: 4;
`
const Arrow = styled.a`
	position: absolute;
	bottom: 2%;
	animation: ${Bounce} 2s;
	z-index: 4;
	width: 8rem;
	&:hover{
		animation: ${Bounce} 2s infinite;
	}
`
const LogoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 4;
	width: 55%;
	
`
const Flavour = styled.p`
	font-family: Rubik, sans-serif;
	color: ${colors.white};
	font-weight: bold;
	font-size: 3rem;
	margin-top: 2rem;
	text-align:center;
`

const HeroSection = () => {
	return(
		<Container className="bgimage">
			<LogoBox>
				<img src={fullLogo} alt="Full Wab Logo" width="130%" />
				<Flavour>
					Your dose of curiosity
				</Flavour>
			</LogoBox>
			<Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
				</path>
			</Waves>
			<Arrow href="#episodes">
				<img src={arrow} alt="Arrow" width="100%"/>
			</Arrow>
		</Container>
		
	)
}

export default HeroSection

