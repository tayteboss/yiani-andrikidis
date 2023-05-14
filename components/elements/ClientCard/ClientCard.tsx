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
	color: var(--colour-white);
	mix-blend-mode: difference;
	position: relative;
	z-index: 2;
`;

type Props = {
	client: string;
	project: ClientProjectType[];
};

const ClientCard = (props: Props) => {
	const {
		client,
		project
	} = props;

	return (
		<ClientCardWrapper>
			{client && (
				<Title>{client}</Title>
			)}
			<ClientProjects data={project} />
		</ClientCardWrapper>
	);
};

export default ClientCard;
