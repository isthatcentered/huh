import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostsListQuery } from "../__graphqlTypes"




function IndexPage( { data: { allMarkdownRemark } }: { data: PostsListQuery } )
{
	const posts = allMarkdownRemark!.edges.map( post => ({
		title: post.node.frontmatter!.title!,
		date:  post.node.frontmatter!.date!,
	}) )
	
	return (
		<Layout>
			<SEO title="Home"/>
			<ul>
				{posts.map( ( { date, title } ) => (
					<li key={title}>
						<Link to={`/posts/${title}`}>
							<h2 className="">{title}</h2>
							<p className="text-xs text-gray-500">{date}</p>
						</Link>
					</li>) )}
			</ul>
		</Layout>
	)
}


export const PostLinkFragment = graphql`
	fragment  postLinkFragment on MarkdownRemarkConnection {
		edges {
			node {
				frontmatter {
					title
					date(fromNow: true)
				}
				headings {
					value
					depth
				}
			}
		}
	}
`

export const query = graphql`
	query PostsList ($max: Int = 10){
		allMarkdownRemark(limit: $max) {
			...postLinkFragment
		}
	}
`


export default IndexPage
