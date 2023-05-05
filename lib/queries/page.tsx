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
			project {
				awardsRecognition {
					${richTextFragment}
				}
				credits {
					${richTextFragment}
				}
				link
				role
				title
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
