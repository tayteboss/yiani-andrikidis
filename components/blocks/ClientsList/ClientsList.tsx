import styled from 'styled-components';
import ClientCard from '../../elements/ClientCard';
import { ClientType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';

const ClientsListWrapper = styled.div`
	padding: ${pxToRem(16)} 0 ${pxToRem(240)};

	.grid {
		row-gap: ${pxToRem(120)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			row-gap: ${pxToRem(60)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			row-gap: ${pxToRem(40)};
		}
	}
`;

const GridItem = styled.div`
	grid-column: span 4;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: span 6;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 3;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const ClientsList = (props: any) => {
	const { data, filteredData } = props;

	const list = Array.isArray(filteredData)
		? filteredData
		: Array.isArray(data)
		? data
		: [];

	const hasData = list.length > 0;

	return (
		<ClientsListWrapper>
			<LayoutWrapper>
				{hasData && (
					<LayoutGrid>
						{list.map((item: ClientType, i: number) => (
							<GridItem key={i}>
								<ClientCard
									client={item?.client}
									projectType={item?.projectType}
									project={item.project}
								/>
							</GridItem>
						))}
					</LayoutGrid>
				)}
			</LayoutWrapper>
		</ClientsListWrapper>
	);
};

export default ClientsList;
