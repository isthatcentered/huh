const defaultTheme = require( "tailwindcss/defaultTheme" )


module.exports = {
	important: true,
	theme: {
		extend: {
			fontFamily: {
				serif: [
					"Source Serif Pro",
					...defaultTheme.fontFamily.serif,
				],
			},
			fontWeight: {
				...defaultTheme.fontWeight,
				bold: 600,
				
			},
			colors: {
				// https://maketintsandshades.com/#0601ef
				// https://superdevresources.com/tools/color-shades#0601ef
				// #701bf0 -> purple
				...defaultTheme.colors,
				primary: {
					100: "#e6e6ff",
					200: "#b4b3ff",
					300: "#8380fe",
					400: "#514dfe",
					500: "#1f1afe",
					600: "#0601e5",
					700: "#0401b2",
					800: "#03017f",
					900: "#02004c",
				},
				gray: {
					100: "#f7fafc",
					200: "#edf2f7",
					300: "#e2e8f0",
					400: "#cbd5e0",
					500: "#a0aec0",
					600: "#718096",
					700: "#4a5568",
					800: "#2d3748",
					900: "#1a202c",
				},
			},
			
		},
	},
	variants: {},
	plugins: [],
}