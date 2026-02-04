import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import MuxPlayer from '@mux/mux-player-react/lazy';

const ClientProjectsCardWrapper = styled.div`
	position: relative;
	z-index: 2;

	transition: all 150ms var(--transition-ease);

	&:hover {
		z-index: 10;

		&.client-card__project-details {
			opacity: 1;
			filter: blur(0);
		}
	}

	&:not(:last-child) {
		margin-bottom: ${pxToRem(40)};
	}
`;

const Inner = styled.div``;

const Title = styled.a`
	text-decoration: none;
	color: var(--colour-blue);
	margin-bottom: ${pxToRem(8)};
	display: inline-block;
	position: relative;
	z-index: 2;

	&:hover {
		text-decoration: underline;
	}
`;

const Details = styled.div`
	margin-bottom: ${pxToRem(8)};
`;

const Span = styled.span`
	color: var(--colour-black);
`;

const AwardRecWrapper = styled.div`
	margin-bottom: ${pxToRem(8)};
`;

const VideoComponentWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	margin-bottom: ${pxToRem(16)};

	mux-player {
		height: auto;
		width: 100%;
	}
`;

const Video = styled.video``;

const ClientProjectsCard = (props: ClientProjectType) => {
	const {
		title,
		awardsRecognition,
		credits,
		role,
		year,
		projectType,
		link,
		placeholderThumbnail,
		videoSnippetMp4,
		videoSnippetWebm,
		muxAssetId
	} = props;

	const capitalise = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<>
			<ClientProjectsCardWrapper className="client-card__project-details">
				<Inner>
					{(videoSnippetMp4?.video?.muxPlaybackId || muxAssetId) && (
						<VideoComponentWrapper className="video-component-wrapper">
							<MuxPlayer
								streamType="on-demand"
								playbackId={
									videoSnippetMp4?.video?.muxPlaybackId ||
									muxAssetId
								}
								autoPlay="muted"
								loop={true}
								thumbnailTime={0}
								preload="auto"
								muted
								playsInline={true}
								loading="viewport"
							/>
						</VideoComponentWrapper>
					)}
					{title && (
						<Title href={link} target="_blank" className="type-h3">
							{title}
						</Title>
					)}
					<Details>
						<Span className="type-h4">
							{year ? `${year} - ` : ``}
						</Span>
						<Span className="type-h4">
							{projectType ? `${capitalise(projectType)} - ` : ``}
						</Span>
						<Span className="type-h4">{role && role}</Span>
					</Details>
					{awardsRecognition && (
						<AwardRecWrapper>
							<RichText data={awardsRecognition} />
						</AwardRecWrapper>
					)}
					{credits && <RichText data={credits} />}
				</Inner>
			</ClientProjectsCardWrapper>
		</>
	);
};

export default ClientProjectsCard;
