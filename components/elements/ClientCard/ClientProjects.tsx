import styled from 'styled-components';
import { ClientProjectType } from '../../../shared/types/types';
import ClientProjectsCard from './ClientProjectsCard';

const ClientProjectsWrapper = styled.div``;

type Props = {
	data: ClientProjectType[];
	projectType: string;
};

const ClientProjects = (props: Props) => {
	const { data, projectType } = props;

	const hasData = data.length > 0;

	return (
		<ClientProjectsWrapper>
			{hasData &&
				data.map((item, i) => (
					<ClientProjectsCard
						title={item?.title}
						awardsRecognition={item?.awardsRecognition}
						credits={item?.credits}
						role={item?.role}
						year={item?.year}
						projectType={projectType}
						link={item?.link}
						placeholderThumbnail={item?.placeholderThumbnail}
						videoSnippetMp4={item?.videoSnippetMp4}
						videoSnippetWebm={item?.videoSnippetWebm}
						muxAssetId={item?.muxAssetId}
						key={i}
					/>
				))}
		</ClientProjectsWrapper>
	);
};

export default ClientProjects;
