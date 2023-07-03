import styled from 'styled-components';
import HomeRichText from '../../common/HomeRichText';

const StatementWrapper = styled.div``;

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
