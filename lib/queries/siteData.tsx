const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			email
			phone
			instagramLink
			vimeoLink
			profilePicture {
				url
			}
			seoImage {
				url
			}
			seoTitle
			seoDescription
			highlightColour {
				cssRgb
			}
			cvLink
		}
	}
`;

export default SITE_DATA_QUERY;
