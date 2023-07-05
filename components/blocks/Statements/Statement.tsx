import styled from 'styled-components';
import HomeRichText from '../../common/HomeRichText';

const StatementWrapper = styled.div``;

type Props = {
	data: {
		content: any;
	}
	index: number;
}

const Statement = (props: Props) => {
	const {
		data,
		index
	} = props;

	return (
		<StatementWrapper>
			{data?.content && (
				<HomeRichText
					data={data?.content}
					index={index}
				/>
			)}
		</StatementWrapper>
	);
};

export default Statement;
