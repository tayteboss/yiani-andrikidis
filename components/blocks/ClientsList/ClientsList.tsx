import styled from 'styled-components';
import ClientCard from '../../elements/ClientCard';
import { ClientType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useState } from 'react';

type StyledProps = {
	$isHovered: boolean;
};

const ClientsListWrapper = styled.div<StyledProps>`
	padding: ${pxToRem(16)} 0 ${pxToRem(240)};

	.client-card {
		&__title,
		&__project-details {
			opacity: ${({ $isHovered }) => $isHovered ? 0.5 : 1};
			filter: ${({ $isHovered }) => $isHovered ? 'blur(2px)' : 'blur(0)'};
		}
	}
`;

const ClientsList = (props: any) => {
	const {
		data
	} = props;

	const hasData = data.length > 0;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<ClientsListWrapper $isHovered={isHovered}>
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
								setIsHovered={setIsHovered}
								isHovered={isHovered}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</LayoutWrapper>
		</ClientsListWrapper>
	);
};

export default ClientsList;
