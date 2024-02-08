import styled from 'styled-components';
import { AwardsType } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import AwardsCardThumbnail from './AwardsCardThumbnail';
import { useState } from 'react';

const AwardsCardWrapper = styled.div`
	grid-column: span 4;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 3;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.a`
	color: var(--colour-blue);
	margin-bottom: ${pxToRem(8)};
	text-decoration: none;
	display: inline-block;

	&:hover {
		text-decoration: underline;
	}
`;

const FooterDetails = styled.div`
	margin-top: ${pxToRem(8)};
`;

const Span = styled.span`
	font-family: var(--font-lazzer-medium);
`;

const AwardsCard = (props: AwardsType) => {
	const {
		awardsRecognition,
		placeholderThumbnail,
		projectType,
		title,
		role,
		year,
		videoSnippetMp4,
		videoSnippetWebm,
		muxAssetId,
		link
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<AwardsCardWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<AwardsCardThumbnail
				placeholderThumbnail={placeholderThumbnail}
				videoSnippetMp4={videoSnippetMp4}
				videoSnippetWebm={videoSnippetWebm}
				muxAssetId={muxAssetId}
				isHovered={isHovered}
			/>
			{title && (
				<Title href={link} target="_blank" className="type-h3">
					{title}
				</Title>
			)}
			{awardsRecognition && <RichText data={awardsRecognition} />}
			<FooterDetails>
				<Span>{year && year}</Span>
				<Span> - </Span>
				<Span>{projectType && projectType}</Span>
				<Span> - </Span>
				<Span>{role && role}</Span>
			</FooterDetails>
		</AwardsCardWrapper>
	);
};

export default AwardsCard;
