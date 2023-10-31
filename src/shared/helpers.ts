import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Edge } from './types'

export function isMobile(vw: number) {
	return vw < 769
}

export function getPhotosFromGraphQLResult(allFile: { edges: Array<Edge> }) {
	const photos: { [index: number]: IGatsbyImageData } = {}

	if (Array.isArray(allFile.edges)) {
		allFile.edges.forEach((edge: Edge) => {
			const id = parseInt(edge.node.relativePath.split('/')[1])
			photos[id] = edge.node.childImageSharp.gatsbyImageData
		})
	}

	return photos
}

export const ym = (eventName: string) => {
	const TRACKING_ID = 95199893
	if (window && 'ym' in window && typeof window.ym === 'function') {
		window.ym(TRACKING_ID, 'reachGoal', eventName)
	}
}
