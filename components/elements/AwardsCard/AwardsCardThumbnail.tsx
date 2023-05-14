import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef } from 'react';

const AwardsCardThumbnailWrapper = styled.div`
	margin-bottom: ${pxToRem(16)};
	width: 100%;
	padding-top: 56.25%;
	position: relative;
`;

const Img = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	inset: 0;
`;

const Video = styled.video`
	object-fit: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	inset: 0;
`;

type Props = {
	placeholderThumbnail: {
		url: string
	},
	videoSnippetMp4: {
		url: string
	},
	videoSnippetWebm: {
		url: string
	},
	isHovered: boolean;
};

const AwardsCardThumbnail = (props: Props) => {
	const {
		placeholderThumbnail,
		videoSnippetMp4,
		videoSnippetWebm,
		isHovered
	} = props;

	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (!videoRef?.current) return;

		if (isHovered) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [isHovered]);

	return (
		<AwardsCardThumbnailWrapper>
			{videoSnippetMp4 ? (
				<Video
					autoPlay={false}
					muted
					playsInline
					loop
					ref={videoRef}
					preload="auto"
					poster={placeholderThumbnail?.url}
				>
					<source src={videoSnippetMp4.url} type="video/mp4" />
					<source src={videoSnippetWebm.url} type="video/webm" />
				</Video>
			) : (
				<Img src={placeholderThumbnail?.url} />
			)}
		</AwardsCardThumbnailWrapper>
	);
};

export default AwardsCardThumbnail;
