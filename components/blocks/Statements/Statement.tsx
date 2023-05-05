import styled from 'styled-components';
import HomeRichText from '../../common/HomeRichText';
import pxToRem from '../../../utils/pxToRem';

const StatementWrapper = styled.span`
	.content, p, span, a {
		display: inline;
		font-size: ${pxToRem(53)};
		line-height: ${pxToRem(65)};
	}
`;

type Props = {
	data: {
		content: any;
	}
}

const Statement = (props: Props) => {
	const {
		data
	} = props;

	return (
		<StatementWrapper>
			{data?.content && (
				<HomeRichText data={data?.content} />
			)}
		</StatementWrapper>
	);
};

export default Statement;
