import React from 'react'
import Layout from '../components/layout'
import Helm from '../components/helm'
import styled, {keyframes} from 'styled-components'
import colors from '../data/colors'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import arrow from '../images/svg/Arrow.svg'

const Container = styled.header`
	width: 100%;
	min-height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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

const Waves = styled.svg`
	position: absolute;
	z-index: 4;
	transform: scaleX(-1);
		bottom: 0;
`
const UpsideWaves = styled.svg`
	position: absolute;
	z-index: 4;
	transform: scaleY(-1);
	top: -1px;
`

const Main = styled.main`
	width: 100%;
	max-width: 100%;
	height: fit-content;
	background: linear-gradient(0deg, ${colors.red}, ${colors.orange});
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	padding-bottom: 3rem;
`
const PageTitle = styled.h2`
	z-index: 10;
	font-size: 7rem;
	color: ${colors.white};
`

const EpisodesList = styled.div`
	width: 100%;
	max-width: 1920px;
	height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	@media(max-width: 720px){
		flex-direction: column;
	}
`
const SectionHeader = styled.h3`
	font-size: 3.23rem;
	margin-top: 5em;
	margin-bottom: 1em;
	z-index: 50;
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
	z-index: 20;
	width: 8rem;
	&:hover{
		animation: ${Bounce} 2s infinite;
	}
`

const Episodes = () => {
	const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
        edges{
          node {
            frontmatter{
              title
              date(formatString: "DD.MM.YYYY")
              description
              banner {
                childImageSharp{
                  fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields{
              slug
            }
          }
        }
      }
    }
  `)
	return(
		<Layout>
			<Helm title="Episodes" />
			<Container className="epimage">
				<PageTitle>
					Episodes
				</PageTitle>
				<Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
				</path>
			</Waves>
			<Arrow href="#episodes">
				<img src={arrow} alt="Arrow" width="100%"/>
			</Arrow>
			</Container>
			<Main id="episodes">
			<UpsideWaves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
				</path>
			</UpsideWaves>
			<SectionHeader>
				Recent Episodes
			</SectionHeader>
			<EpisodesList>
				{
					data.allMarkdownRemark.edges.map((edge)=>{
						const Card = styled.article`
							position: relative;
							width: 80vw;
							height: 60vh;
							max-width: 21rem;
							max-height: 36rem;
							overflow: hidden;
							background-color: ${colors.black};
							border-radius: 4vw;
						`
						const Content = styled.div`
							background-color: ${colors.black};
							width: 100%;
							position: relative;
							z-index: 9;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							&:after{
								content: ' ';
								width: 100%;
								height: 100%;
								background: linear-gradient(0deg, ${colors.black}, transparent);
								position: absolute;
								bottom: 100%;
							}
						`
						const Title = styled.h3`
							margin-left: 1.5rem;
							font-size: 1.5rem;
							text-align: left;
							color: ${colors.yellow};
							z-index: 10;
							font-family: Rubik, sans-serif;
							position: relative;
						`
						const Description = styled.p`
							font-size: 1rem;
							text-align: center;
							padding: .5rem 1.5rem;
							z-index: 10;
						`
						const Mark = styled.mark`
							background: none;
							color: ${colors.white};
							text-decoration: underline;
							font-weight: bold;
							font-size: 1rem;
						`
						return(
							<Card>
								<Link style={{borderRadius: "4vw", textDecoration: "none"}} to={`/episodes/${edge.node.fields.slug}`}> 
								<Img style={{width: "100%"}} fluid={edge.node.frontmatter.banner.childImageSharp.fluid} alt={edge.node.frontmatter.title}/>
								<Content>
									<Title>{edge.node.frontmatter.title}</Title>
									<Description>
										{edge.node.frontmatter.description}
									</Description>
									<Mark>
										Read More
									</Mark>
								</Content>
								
							</Link>
							</Card>
						)
					})
				}
			</EpisodesList>
			</Main>
		</Layout>
	)
}

export default Episodes