import styled from 'styled-components';
import { FeaturedProjectType } from '../../../shared/types/types';
import { useRef } from 'react';
import pxToRem from '../../../utils/pxToRem';

const FeaturedProjectWrapper = styled.div`
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: 56.25%;
		width: 100%;
		position: relative;
		height: unset;
	}
`;

const VideoComponentWrapper = styled.div`
	position: relative;
	border-radius: ${pxToRem(8)};
	overflow: hidden;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
	}
`;

const Video = styled.video`
	object-fit: cover;
	height: 100%;
	width: auto;
`;

type Props = {
	data: FeaturedProjectType
};

const FeaturedProject = (props: Props) => {
	const {
		data
	} = props;

	const {
		role,
		title,
		placeholderImage,
		snippetVideoMp4,
		snippetVideoWebm,
		vimeoLink
	} = data;

	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<FeaturedProjectWrapper>
			<VideoComponentWrapper className="video-component-wrapper">
				{snippetVideoMp4?.url && (
					<Video
						autoPlay
						muted
						playsInline
						loop
						ref={videoRef}
						preload="auto"
						poster={placeholderImage?.url}
					>
						<source src={snippetVideoMp4?.url} type="video/mp4" />
						<source src={snippetVideoWebm?.url} type="video/webm" />
					</Video>
				)}
			</VideoComponentWrapper>
		</FeaturedProjectWrapper>
	);
};

export default FeaturedProject;
