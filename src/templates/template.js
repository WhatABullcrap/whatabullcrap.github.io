import React from 'react'
import Helm from '../components/helm'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD.MM.YYYY")
            }
            html
        }
    }
    `

const Container = styled.div`
	width: 55%;
	max-width: 1920px;
	min-height: 100vh;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Post = (props) => {

    return (
        <Layout>
            <Helm title={props.data.markdownRemark.frontmatter.title} />
            
            <Container dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>

            </Container>
        </Layout>
    )
}

export default Post