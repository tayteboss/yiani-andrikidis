import styled from 'styled-components';
import { AwardsType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import AwardsCard from '../../elements/AwardsCard';

const AwardsListWrapper = styled.div`
	padding: ${pxToRem(16)} 0 ${pxToRem(240)};

	.grid {
		row-gap: ${pxToRem(32)};
	}
`;

type Props = {
	data: AwardsType[];
};

const AwardsList = (props: Props) => {
	const { data } = props;

	const hasData = data && data.length > 0;

	return (
		<AwardsListWrapper>
			<LayoutWrapper>
				<LayoutGrid>
					{hasData &&
						data.map((item: AwardsType, i: number) => (
							<AwardsCard
								awardsRecognition={item?.awardsRecognition}
								placeholderThumbnail={
									item?.placeholderThumbnail
								}
								projectType={item?.projectType}
								title={item?.title}
								role={item?.role}
								videoSnippetMp4={item?.videoSnippetMp4}
								videoSnippetWebm={item?.videoSnippetWebm}
								muxAssetId={item?.muxAssetId}
								year={item?.year}
								link={item?.link}
								key={i}
							/>
						))}
				</LayoutGrid>
			</LayoutWrapper>
		</AwardsListWrapper>
	);
};

export default AwardsList;
