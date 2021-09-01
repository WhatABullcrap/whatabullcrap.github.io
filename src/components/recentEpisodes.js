import React from 'react'
import styled from 'styled-components'
import colors from '../data/colors'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const flexCenter = `display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;`

const Container = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	${flexCenter}
	background: none;
`

const ContainerContent = styled.div`
	width: 100%;
	max-width: 1920px;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`

const Waves = styled.svg`
	position: absolute;
	top: -1px;
	left: 0;
	transform: scaleY(-1);
`

const SectionHeader = styled.h3`
	font-size: 3.23rem;
	margin-top: 5em;
	margin-bottom: 1em;
	z-index: 50;
`


const Recent = () => {

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
		<Container id="episodes">
			<Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#120808" fill-opacity="1" d="M0,192L80,213.3C160,235,320,277,480,256C640,235,800,149,960,138.7C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
				</path>
			</Waves>
				<SectionHeader>
					Recent Episodes
				</SectionHeader>
			<ContainerContent>
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
			</ContainerContent>
		</Container>
	)
}

export default Recent