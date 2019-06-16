import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { HTMLAttributes } from "react"




const Header = ( { siteTitle }: { siteTitle: string } ) => (
	<header>
		<AppLogo/>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header


export function AppLogo( { ...props }: {} & HTMLAttributes<HTMLDivElement> )
{
	const { site: { siteMetadata: { title } } } = useStaticQuery( graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	` )
	
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

export function AppHeader( { ...props }: { } & HTMLAttributes<HTMLDivElement> )
{
	const navItems = [ "posts" ] // @todo: fetch them from pages folder
	
	const NavItem = ( { name }: { name: string } ) => (
		<li className="inline p-2">
			<Link className="capitalize text-purple-700 underline"
			      to={`/`}
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