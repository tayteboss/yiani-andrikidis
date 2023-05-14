import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';

const ClientProjectsCardWrapper = styled.div`
	position: relative;
	z-index: 2;

	&:not(:last-child) {
		margin-bottom: ${pxToRem(24)};
	}
`;

const Inner = styled.div`
	max-width: ${pxToRem(220)};
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

const Role = styled.h4`
	margin-bottom: ${pxToRem(8)};
`;

const AwardRecWrapper = styled.div`
	margin-bottom: ${pxToRem(8)};
`;

const ImageWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 30%;
	height: auto;
	z-index: 1;
`;

const Img = styled.img`
	height: 100%;
	width: 100%;
`;

const ClientProjectsCard = (props: ClientProjectType) => {
	const {
		title,
		awardsRecognition,
		credits,
		role,
		link,
		thumbnail
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<ClientProjectsCardWrapper>
				<Inner>
					{title && (
						<Title
							href={link}
							target="_blank"
							className="type-h3"
							onMouseOver={() => setIsHovered(true)}
							onMouseOut={() => setIsHovered(false)}
						>
							{title}
						</Title>
					)}
					{role && (
						<Role>{role}</Role>
					)}
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
			{(thumbnail && isHovered) && (
				<ImageWrapper>
					<Img src={thumbnail.url} />
				</ImageWrapper>
			)}
		</>
	);
};

export default ClientProjectsCard;
