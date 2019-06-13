import { Link } from "gatsby"
import { useLayoutQuery } from "../hooks/useLayoutQuery"
import * as React from "react"
import { HTMLAttributes } from "react"




export function AppLogo( { ...props }: {} & HTMLAttributes<HTMLDivElement> )
{
	const { site: { siteMetadata: { title } } } = useLayoutQuery()
	
	return (
		<div
			{...props}
			className={`Logo font-bold ${props.className || ""}`}
			style={{ ...(props.style || {}) }}
		>
			<Link className="text-xl"
			      to="/"
			>
				{title} <span className="sr-only">homepage</span>
			</Link>
		</div>)
}


export function AppHeader( { title, ...props }: { title: string } & HTMLAttributes<HTMLDivElement> )
{
	
	const navItems = [ "posts" ] // @todo: fetch them from pages folder
	
	const NavItem = ( { name }: { name: string } ) => (
		<li className="inline p-2">
			<Link className="capitalize text-purple-700 underline"
			      to={`/${name}`}
			>
				{name}
			</Link>
		</li>)
	
	return (
		<header
			{...props}
			className={`Header ${props.className || ""}`}
			style={{ ...(props.style || {}) }}
		>
			<AppLogo/>
			
			<nav>
				<ul className="-mx-2">
					{navItems.map( item => <NavItem key={item}
					                                name={item}/> )}
				</ul>
			</nav>
		</header>)
}