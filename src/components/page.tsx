import * as React from "react"
import { HTMLAttributes, useEffect } from "react"
import Helmet from "react-helmet"
import { useLayoutQuery } from "../hooks/useLayoutQuery"
import "./styles.css"
import { RouterProps } from "@reach/router"
import { AppHeader } from "./Random"




export function Page( { location, children, ...props }: {} & HTMLAttributes<HTMLDivElement> & RouterProps )
{
	const { site } = useLayoutQuery()
	
	const { title, description, keywords } = site.siteMetadata
	
	
	useEffect( () => {
		const netlifyIdentity = (window as any).netlifyIdentity
		
		if ( !netlifyIdentity )
			return
		
		netlifyIdentity.on( "init", ( user: Object | null ) => {
			if ( !user )
				netlifyIdentity.on( "login", () =>
					document.location.href = "/admin/" )
		} )
	} )
	
	return (
		<div
			{...props}
			className={`Layout p-4 font-serif ${props.className || ""}`}
			style={{ ...(props.style || {}) }}
		>
			
			
			<Helmet
				title={title}
				meta={[
					{ name: "description", content: description },
					{ name: "keywords", content: keywords || undefined },
				]}
				bodyAttributes={{
					class: "",
				}}
			>
				<html className="text-lg"
				      lang="en"/>
				
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
			</Helmet>
			
			<AppHeader className="mb-4"
			           title={title}
			/>
			
			<main>{children}</main>
		</div>)
}


export default Page
