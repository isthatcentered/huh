import { RouterProps } from "@reach/router"
import * as React from "react"
import { ReactNode } from "react"
import { PostQueryData } from "../interfaces/PostQuery.interface"
import Page from "./page"




function Post( { data, ...props }: { children: ReactNode } & PostQueryData & RouterProps )
{
	if ( !data )
		return null
	
	const { title, date, tags }  = data.mdx.frontmatter,
	      { location, children } = props
	console.log( tags )
	return (
		<Page location={location}>
			<h1>{title}</h1>
			<em>{date}</em>
			{children}
		</Page>
	)
}


export default Post
