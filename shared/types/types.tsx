export type HomeStatements = {
	homePageStatements: [];
};

export type SiteData = {
	seoTitle: string;
	seoDescription: string;
	seoImage: {
		url: string;
	}
};

export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type Transitions = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};
