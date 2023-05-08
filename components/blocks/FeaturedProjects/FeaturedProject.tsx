import styled from 'styled-components';
import { FeaturedProjectType } from '../../../shared/types/types';
import { useRef } from 'react';
import pxToRem from '../../../utils/pxToRem';

const FeaturedProjectWrapper = styled.div`
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: 56.25%;
		width: 100%;
		height: unset;
	}

	&:hover {
		.feature__title,
		.feature__role,
		.feature__link {
			opacity: 1;
		}
	}
`;

const VideoComponentWrapper = styled.div`
	position: relative;
	overflow: hidden;
	width: auto;

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
	height: var(--feature-wrapper-height);
	width: auto;

	transition: all 400ms var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: auto;
		width: 100%;
	}
`;

const Title = styled.p`
	position: absolute;
	top: ${pxToRem(4)};
	left: ${pxToRem(8)};
	color: var(--colour-white);
	mix-blend-mode: difference;
	z-index: 2;
	opacity: 0;
`;

const Role = styled.p`
	position: absolute;
	top: ${pxToRem(5)};
	right: ${pxToRem(10)};
	color: var(--colour-white);
	mix-blend-mode: difference;
	z-index: 2;
	opacity: 0;
`;

const FullVideoTrigger = styled.button`
	position: absolute;
	bottom: ${pxToRem(5)};
	left: ${pxToRem(10)};
	background: var(--colour-white);
	color: var(--colour-black);
	mix-blend-mode: plus-lighter;
	padding: ${pxToRem(2)} ${pxToRem(6)};
	z-index: 2;
	text-decoration: none;
	border-radius: 100px;
	opacity: 0;
`;

type Props = {
	data: FeaturedProjectType;
	setShowFullVideo: (data: { isActive: boolean; url: string }) => void;
};

const FeaturedProject = (props: Props) => {
	const {
		data,
		setShowFullVideo
	} = props;

	const {
		role,
		title,
		placeholderImage,
		snippetVideoMp4,
		snippetVideoWebm,
		vimeoLink,
	} = data;

	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<>
			<FeaturedProjectWrapper>
				{title && (
					<Title className="feature__title">{title}</Title>
				)}
				{role && (
					<Role className="feature__role">{role}</Role>
				)}
				{vimeoLink?.url && (
					<FullVideoTrigger
						onClick={() => setShowFullVideo(
							{ isActive: true, url: vimeoLink.url }
						)}
						className="feature__link"
					>
						Full video
					</FullVideoTrigger>
				)}
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
		</>
	);
};

export default FeaturedProject;
