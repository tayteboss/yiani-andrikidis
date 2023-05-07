import styled from 'styled-components';
import ClientCard from '../../elements/ClientCard';
import { ClientType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ClientsListWrapper = styled.div`
	padding: ${pxToRem(16)} 0 ${pxToRem(120)};
`;

const ClientsList = (props: any) => {
	const {
		data
	} = props;

	const hasData = data.length > 0;

	return (
		<ClientsListWrapper>
			<LayoutWrapper>
				<ResponsiveMasonry
					columnsCountBreakPoints={{350: 1, 500: 2, 900: 3, 1200: 4, 1800: 5}}
				>
					<Masonry gutter="16px">
						{hasData && data.map((item: ClientType, i: number) => (
							<ClientCard
								client={item?.client}
								project={item.project}
								key={i}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</LayoutWrapper>
		</ClientsListWrapper>
	);
};

export default ClientsList;
