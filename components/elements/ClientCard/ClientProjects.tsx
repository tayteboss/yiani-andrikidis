import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import ClientProjectsCard from './ClientProjectsCard';

const ClientProjectsWrapper = styled.div``;

type Props = {
	data: ClientProjectType[];
};

const ClientProjects = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data.length > 0;

	return (
		<ClientProjectsWrapper>
			{hasData && data.map((item, i) => (
				<ClientProjectsCard
					title={item?.title}
					awardsRecognition={item?.awardsRecognition}
					credits={item?.credits}
					role={item?.role}
					link={item?.link}
					key={i}
				/>
			))}
		</ClientProjectsWrapper>
	);
};

export default ClientProjects;
