import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import ClientProjects from './ClientProjects';
import { ClientProjectType } from '../../../shared/types/types';

const ClientCardWrapper = styled.div`
	grid-column: span 3;
	margin-bottom: ${pxToRem(24)};
`;

const Title = styled.h2`
	margin-bottom: ${pxToRem(24)};
	color: var(--colour-black);
	position: relative;
	z-index: 1;

	transition: all 150ms var(--transition-ease);
`;

type Props = {
	client: string;
	projectType: string;
	project: ClientProjectType[];
	isHovered: boolean;
	setIsHovered: (isHovered: boolean) => void;
};

const ClientCard = (props: Props) => {
	const {
		client,
		project,
		projectType,
		setIsHovered,
		isHovered
	} = props;

	return (
		<ClientCardWrapper>
			{client && (
				<Title className="client-card__title">
					{client}
				</Title>
			)}
			<ClientProjects
				data={project}
				projectType={projectType}
				setIsHovered={setIsHovered}
				isHovered={isHovered}
			/>
		</ClientCardWrapper>
	);
};

export default ClientCard;
