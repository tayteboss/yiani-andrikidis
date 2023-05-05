import styled from 'styled-components';
import { renderNodeRule, StructuredText } from 'react-datocms';
import { isLink, isParagraph } from 'datocms-structured-text-utils';
import randomIntFromInterval from '../../../utils/randomIntFromInterval';

const Content = styled.span`
	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Span = styled.span`
	color: var(--colour-blue);
	white-space: pre;
`;

const SpecialSpan = styled.span`
	position: relative;

	transition: color 0s ease 1s;

	&:hover {
		color: var(--colour-blue);

		transition: all 0s ease 0s;
	}
`;

const Link = styled.a`
	color: var(--colour-black);

	&:hover {
		text-decoration: underline;
		color: var(--colour-blue);
	}
`;

type Props = {
	className?: string;
	data: any;
	color?: string;
};

const HomeRichText = (props: Props) => {
	const {
		className,
		data,
		color
	} = props;

	return (
	<Content className={`${className} content content--${color}`}>
		<Span className="type-h1">Yiani Andrikidis </Span>
		<StructuredText
			data={data}
			customNodeRules={[
				renderNodeRule(isLink, ({ node, children, key }) => (
					<Link href={node.url} target="_blank" key={`${key}-islink`}>{children}</Link>
				)),
				renderNodeRule(isParagraph, ({ children }) => {
					if (children === undefined || children?.length <= 0) return <></>;

					return (
						children.map((item, index) => {
							if (item?.props?.href) return (
								<Link
									target="_blank"
									href={item?.props?.href}
									className="type-h1"
									key={`${index}-link`}
								>
									{item?.props?.children[0].props?.children[0]}
								</Link>
							);

							return (
								item?.props?.children[0]?.split("")
									.map((item: string, index: number) => {
										return (
											<SpecialSpan
												className="type-h1"
												key={`${index}-${randomIntFromInterval(1, 100000)}`}
											>
												{item}
											</SpecialSpan>);
									}
								)
							)
						})
					)
				}),
			]}
		/>
		<Span className="type-h1"> </Span>
	</Content>
	);
};

export default HomeRichText;
