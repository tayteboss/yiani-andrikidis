export type FeaturedProjectType = {
	role: string;
	title: string;
	placeholderImage: {
		url: string;
	};
	snippetVideoMp4: {
		url: string;
		video: {
			muxPlaybackId: string;
		}
	};
	snippetVideoWebm: {
		url: string;
	};
	vimeoLink: {
		url: string;
	}
};

export type ClientType = {
	client: string;
	projectType: string;
	project: [];
};

export type ClientProjectType = {
	awardsRecognition: {};
	credits: {};
	role: string;
	year?: string;
	projectType?: string;
	title: string;
	link: string;
	placeholderThumbnail: {
		url: string;
	};
	videoSnippetMp4: {
		url: string;
		video: {
			muxPlaybackId: string;
		}
	};
	videoSnippetWebm: {
		url: string;
	};
	isHovered: boolean;
	setIsHovered: (isHovered: boolean) => void;
};

export type AwardsType = {
	awardsRecognition: {};
	placeholderThumbnail: {
		url: string;
	};
	projectType: string;
	title: string;
	role: string;
	link: string;
	videoSnippetMp4: {
		url: string;
		video: {
			muxPlaybackId: string;
		}
	}
	videoSnippetWebm: {
		url: string;
	}
	year: string
};

export type HomeStatements = {
	homePageStatements: [];
};

export type SiteData = {
	seoTitle: string;
	seoDescription: string;
	seoImage: {
		url: string;
	}
	highlightColour: {
		cssRgb: string;
	};
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
