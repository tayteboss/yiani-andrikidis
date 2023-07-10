import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';

type StyledProps = {
	$isHovered: boolean;
};

const ClientProjectsCardWrapper = styled.div<StyledProps>`
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
		margin-bottom: ${pxToRem(24)};
	}
`;

const Inner = styled.div`
	max-width: ${pxToRem(220)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		max-width: 100%;
	}
`;

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
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	overflow: hidden;
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
		isHovered,
		setIsHovered
	} = props;

	const [isHoveredCard, setIsHoveredCard] = useState(false);

	const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	return (
		<>
			{(videoSnippetMp4 && isHovered && isHoveredCard) && (
				<VideoComponentWrapper className="video-component-wrapper">
					<Video
						autoPlay
						muted
						playsInline
						loop
						preload="auto"
						poster={placeholderThumbnail?.url}
					>
						<source src={videoSnippetMp4?.url} type="video/mp4" />
						<source src={videoSnippetWebm?.url} type="video/webm" />
					</Video>
				</VideoComponentWrapper>
			)}
			<ClientProjectsCardWrapper
				className="client-card__project-details"
				$isHovered={isHovered}
				onMouseOver={() => setIsHoveredCard(true)}
				onMouseOut={() => setIsHoveredCard(false)}
			>
				<Inner>
					{title && (
						<Title
							href={link}
							target="_blank"
							className="type-h3"
							onMouseOver={() => setIsHovered(videoSnippetMp4?.url ? true : false)}
							onMouseOut={() => setIsHovered(false)}
						>
							{title}
						</Title>
					)}
					<Details>
						<Span className="type-h4">{year ? `${year} - ` : ``}</Span>
						<Span className="type-h4">{projectType ? `${capitalise(projectType)} - ` : ``}</Span>
						<Span className="type-h4">{role && role}</Span>
					</Details>
					{awardsRecognition && (
						<AwardRecWrapper>
							<RichText data={awardsRecognition} />
						</AwardRecWrapper>
					)}
					{credits && (
						<RichText data={credits} />
					)}
				</Inner>
			</ClientProjectsCardWrapper>
		</>
	);
};

export default ClientProjectsCard;
