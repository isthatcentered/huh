export interface PostQueryData
{
	data: {
		mdx: {
			frontmatter: {
				path: string
				title: string
				date: string
				tags: string[]
				published: boolean
			}
		}
	}
}
