import { RouterProps } from "@reach/router";
import * as React from "react";
import Page from "../components/page"
import { useListingQuery } from "../hooks/useListingQuery"
import { Link } from "gatsby"




/**
 * @todo: netlify cms mdx
 * @todo: Add tags to post template
 * @todo: Add sitemap
 * @todo: Add json ld data
 * @tood: Add analytics
 * @todo: deploy
 */
function IndexPage( { location }: RouterProps )
{
	const { allMdx } = useListingQuery(),
	      posts      = allMdx && allMdx.edges && allMdx.edges
	
	
	return (
		<Page location={location}>
			<ul>
				{posts && posts.map( ( { node } ) => {
					const { path, title, date } = node.frontmatter
					
					return (
						<li key={path}>
							<Link to={`/posts${path}`}>
								<h2 className="">{title}</h2>
								<p className="text-xs text-gray-500">{date}</p>
							</Link>
						</li>)
				} )}
			</ul>
		</Page>)
}


export default IndexPage;
