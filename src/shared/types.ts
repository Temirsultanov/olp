import { IGatsbyImageData } from 'gatsby-plugin-image'

export type Contact = {
	text: string
	link: string
}

export type Contacts = {
	[index: string]: Contact
}

export type Service = {
	id: string
	title: string
	description: string
}

export type Benefit = {
	id: number
	title: string
	description: string
}

export type Employee = {
	id: number
	name: string
	role: string
	photoSrc: string
}

export type Review = {
	id: number
	name: string
	text: string
	photoSrc: string
}

export interface Edge {
	node: {
		relativePath: string
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData
		}
	}
}
