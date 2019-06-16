import React, { HTMLAttributes } from "react"
import { AppHeader } from "./header"
import "../styles.css"




function Layout( { children, ...props }: {} & HTMLAttributes<HTMLDivElement> )
{
	return (
		<div
			{...props}
			className={`Layout p-4 ${props.className || ""}`}
			style={{ ...(props.style || {}) }}
		>
			<AppHeader className="mb-4"/>
			<main>{children}</main>
			
			<footer/>
		</div>)
}


export default Layout
