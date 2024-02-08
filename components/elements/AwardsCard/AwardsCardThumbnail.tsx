import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef } from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import MuxPlayer from '@mux/mux-player-react';

const AwardsCardThumbnailWrapper = styled.div`
	margin-bottom: ${pxToRem(16)};
	width: 100%;
	position: relative;
`;

const Img = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	inset: 0;
`;

type Props = {
	placeholderThumbnail: {
		url: string;
	};
	videoSnippetMp4: {
		url: string;
		video: {
			muxPlaybackId: string;
		};
	};
	videoSnippetWebm: {
		url: string;
	};
	isHovered: boolean;
	muxAssetId: string;
};

const AwardsCardThumbnail = (props: Props) => {
	const {
		placeholderThumbnail,
		videoSnippetMp4,
		videoSnippetWebm,
		isHovered,
		muxAssetId
	} = props;

	const videoRef = useRef<HTMLVideoElement>(null);

	const viewport = useViewportWidth();

	useEffect(() => {
		if (!videoRef?.current) return;

		if (isHovered || viewport === 'mobile') {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [isHovered, viewport]);

	return (
		<AwardsCardThumbnailWrapper>
			{muxAssetId ? (
				<MuxPlayer
					streamType="on-demand"
					playbackId={muxAssetId}
					autoPlay="muted"
					loop={true}
					thumbnailTime={0}
					preload="auto"
					muted
					playsInline={true}
				/>
			) : (
				<>
					{videoSnippetMp4?.video?.muxPlaybackId ? (
						<MuxPlayer
							streamType="on-demand"
							playbackId={videoSnippetMp4.video.muxPlaybackId}
							autoPlay="muted"
							loop={true}
							thumbnailTime={0}
							preload="auto"
							muted
							playsInline={true}
						/>
					) : (
						<Img src={placeholderThumbnail?.url} />
					)}
				</>
			)}
		</AwardsCardThumbnailWrapper>
	);
};

export default AwardsCardThumbnail;
