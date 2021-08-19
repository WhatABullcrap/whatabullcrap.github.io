import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const Helm = ({title}) => {
	const data = useStaticQuery(graphql`
		query{
			site{
				siteMetadata{
					title
				}
			}
		}
	`)
	return(
		<Helmet>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
		</Helmet>
	)
}

export default Helm