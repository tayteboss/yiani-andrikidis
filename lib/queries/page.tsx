import { richTextFragment } from "./fragments";

export const HOME_PAGE_QUERY: string = `
	query Query {
		homePage {
			homePageStatements {
				content {
					${richTextFragment}
				}
			}
		}
	}
`;

export const FEATURED_PROJECTS_QUERY: string = `
	query Query {
		allFeaturedProjects(first: 100) {
			placeholderThumbnail {
				url
			}
			role
			snippetVideoMp4 {
				url
			}
			snippetVideoWebm {
				url
			}
			title
			vimeoLink {
				url
			}
		}
	}
`;

export const INDEX_PAGE_QUERY: string = `
	query Query {
		allIndexProjects(first: 100) {
			client
			projectType
			project {
				awardsRecognition {
					${richTextFragment}
				}
				credits {
					${richTextFragment}
				}
				link
				role
				year
				title
				placeholderThumbnail {
					url
				}
				videoSnippetMp4 {
					url
				}
				videoSnippetWebm {
					url
				}
			}
		}
	}
`;

export const INDEX_PAGE_FILTER_QUERY: string = `
	query Query($filter: String) {
		allIndexProjects(filter: {projectType: {eq: $filter}}, first: 100) {
			client
			projectType
			project {
				awardsRecognition {
					${richTextFragment}
				}
				credits {
					${richTextFragment}
				}
				link
				role
				year
				title
				placeholderThumbnail {
					url
				}
				videoSnippetMp4 {
					url
				}
				videoSnippetWebm {
					url
				}
			}
		}
	}
`;

export const AWARD_PAGE_QUERY: string = `
	query Query {
		allAwards(first: 100) {
			awardsRecognition {
				${richTextFragment}
			}
			link
			placeholderThumbnail {
				url
			}
			projectType
			role
			year
			title
			videoSnippetMp4 {
				url
			}
			videoSnippetWebm {
				url
			}
		}
	}
`;
