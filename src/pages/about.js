import React from 'react'
import Layout from '../components/layout'
import Helm from '../components/helm'
import Links from '../data/links'
import styled, {keyframes} from 'styled-components'
import colors from '../data/colors'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import arrow from '../images/svg/Arrow.svg'

const SectionSize = `
	width: 60%;
	max-width: 1920px;
	margin-bottom: 2.3rem;
`
const CenterColumnFlex = `
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
`

const Container = styled.header`
	width: 100%;
	min-height: 100vh;
	position: relative;
	${CenterColumnFlex}
	&:after{
		width: 100%;
		height: 100%;
		content: '';
		background: #00000026;
		position: absolute;
		top: 0;
		left: 0;
	}
`
const PageTitle = styled.h2`
	font-size: 7rem;
	z-index: 10;
`
const Waves = styled.svg`
	position: absolute;
	bottom: -1px;
	transform: scaleX(-1);`
const UpsideWaves = styled.svg`
	position: absolute;
	top: -1px;
	transform: scaleY(-1);
`
const Main = styled.main`
	background: linear-gradient(${colors.orange}, ${colors.red});
	${CenterColumnFlex}
	position: relative;
	min-height: 100vh;
	width: 100%;
	padding: 12rem 0;
	
`
const WabSection = styled.section`
	${SectionSize}
	${CenterColumnFlex}
`

const EnoddSection = styled.section`
	width: fit-content;
`
const DarrenerSection = styled.section`
	width: fit-content;
`
const AuthorsSocialsWrapper = styled.div`
	display: flex;
	gap: 4rem;
	width: fit-content;
	*{
		.image{
			width: 15rem;
			border-radius: 10rem;
		}
	}
	@media(max-width: 600px){
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
	`
const SectionTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: bold;
	margin: .6em 0;
`
const Introduction = styled.p`
	font-size: 1.2rem;
	width: 100%;
	margin-bottom: 2em;
	text-align: center;
`
const LinkList = styled.ul`
	list-style: none;
`
const LinkListElement = styled.li`
	margin: .7rem 0;
`
const HyperLink = styled.a`
	text-decoration: none;
	display: flex; 
	align-items: center;
	font-size: 1.2rem;
	.icon {
		font-size: 1.6rem;
		margin-right: 1rem;
	}
`
const Bounce = keyframes`
	0%,10%, 20%, 50%, 70%, 80%, 90%, 100% {transform: translateY(0);} 
	40% {transform: translateY(-30px);} 
	60% {transform: translateY(-15px);} 
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

const Episodes = ({data}) => {
	return(
		<Layout>
			<Helm title="About" />
			<Container className="aboutbackground">
				<PageTitle>
					About us
				</PageTitle>
				<Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
					</path>
				</Waves>
				<Arrow href="#about">
				<img src={arrow} alt="Arrow" width="100%"/>
			</Arrow>
			</Container>
			<Main id='about'>
				<UpsideWaves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
					</path>
				</UpsideWaves>
				<WabSection>
					<SectionTitle style={{fontSize: '3.5rem'}}>Who are we?</SectionTitle>
					<Introduction>
						Well we are some dudes that want share our knowledge in&nbsp;a&nbsp;fun way. Enodd, the guy who knows everything about technical things and Darrener who is&nbsp;a&nbsp;master at random fun facts. Together they are WAB - your dose of fun, engagement and curiosity.
					</Introduction>
					<LinkList>
						<LinkListElement>
							<HyperLink href={`${Links.TwitterWab}`}>
								<FontAwesomeIcon icon={faTwitter} className="icon"/>
								WAB's official Twitter
							</HyperLink>
						</LinkListElement>
						<LinkListElement>
							<HyperLink href={`${Links.Youtube}`}>
								<FontAwesomeIcon icon={faYoutube} className="icon"/>
								WAB's official Youtube Channel
							</HyperLink>
						</LinkListElement>
						<LinkListElement>
							<HyperLink href={`${Links.Podbean}`}>
								<FontAwesomeIcon icon={faPodcast} className="icon"/>
								WAB's podcasts
							</HyperLink>
						</LinkListElement>
					</LinkList>
				</WabSection>
				<AuthorsSocialsWrapper>
					<EnoddSection>
						<Img fluid={data.ennodPhoto.childImageSharp.fluid} className="image"/>
						<SectionTitle>Ennod's socials</SectionTitle>
						<LinkList>
							<LinkListElement>
								<HyperLink href={`${Links.EnoddGram}`}>
									<FontAwesomeIcon icon={faInstagram} className="icon"/>
									Ennod's Instagram
								</HyperLink>
							</LinkListElement>
							<LinkListElement>
								<HyperLink href={`${Links.TwitterEnodd}`}>
									<FontAwesomeIcon icon={faTwitter} className="icon"/>
									Ennod's Twitter
								</HyperLink>
							</LinkListElement>
						</LinkList>
					</EnoddSection>
					<DarrenerSection>
					<Img fluid={data.darrenerPhoto.childImageSharp.fluid} className="image"/>
					<SectionTitle>Darrener's socials</SectionTitle>
					<LinkList>
							<LinkListElement>
								<HyperLink href={`${Links.DarrenGram}`}>
									<FontAwesomeIcon icon={faInstagram} className="icon"/>
									Darrener's Instagram
								</HyperLink>
							</LinkListElement>
							<LinkListElement>
								<HyperLink href={`${Links.TwitterDarren}`}>
									<FontAwesomeIcon icon={faTwitter} className="icon"/>
									Darrener's Instagram
								</HyperLink>
							</LinkListElement>
						</LinkList>
					</DarrenerSection>
				</AuthorsSocialsWrapper>
			</Main>
		</Layout>
	)
}

export default Episodes

export const data = graphql`
    query {
        ennodPhoto: file(relativePath: {eq: "images/ennod.jpg"}){
            childImageSharp{
                fluid(maxWidth:1400){
                    ...GatsbyImageSharpFluid
                }
            }
        }
		darrenerPhoto: file(relativePath: {eq: "images/darrener.jpg"}){
            childImageSharp{
                fluid(maxWidth:1400){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`