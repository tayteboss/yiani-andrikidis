import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';

const ClientProjectsCardWrapper = styled.div`
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

	&:hover {
		text-decoration: underline;
	}
`;

const Role = styled.h4`
	margin-bottom: ${pxToRem(8)};
`;

const ClientProjectsCard = (props: ClientProjectType) => {
	const {
		title,
		awardsRecognition,
		credits,
		role,
		link
	} = props;

	return (
		<ClientProjectsCardWrapper>
			<Inner>
				{title && (
					<Title
						href={link}
						target="_blank"
						className="type-h3"
					>
						{title}
					</Title>
				)}
				{role && (
					<Role>{role}</Role>
				)}
				{awardsRecognition && (
					<RichText data={awardsRecognition} />
				)}
				{credits && (
					<RichText data={credits} />
				)}
			</Inner>
		</ClientProjectsCardWrapper>
	);
};

export default ClientProjectsCard;
