import styled from 'styled-components';
import { renderNodeRule, StructuredText } from 'react-datocms';
import { isLink, isParagraph } from 'datocms-structured-text-utils';
import randomIntFromInterval from '../../../utils/randomIntFromInterval';
import { motion } from 'framer-motion';

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;

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

type StyledProps = {
	$isSpace?: boolean;
};

const SpecialSpan = styled(motion.span)<StyledProps>`
	position: relative;
	display: inline-block;
`;

const SpecialSpace = styled.span`
	white-space: pre;
`;

const Link = styled(motion.a)`
	color: var(--colour-black);

	&:hover {
		text-decoration: underline;
		color: var(--colour-black);
	}
`;

const Word = styled.div`
	display: inline;
	white-space: pre;
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

	const groupStringToArray = (string: string): string[][] => {
		const words = string.split(' '); // Split the string by spaces to get an array of words
		const result: string[][] = [];

		words.forEach((word) => {
			const wordArray: string[] = [];
			for (let i = 0; i < word.length; i++) {
				wordArray.push(word[i]); // Push each letter as a separate string into the word array
			}
			result.push(wordArray); // Push the word array into the result array
			result.push([" "]); // Push a space array after each word
		});

		// Remove the extra space array at the end
		result.pop();

		return result;
	};

	return (
		<Content className="content">
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
										whileHover={{
											rotate: randomIntFromInterval(-3, 3),
											transition: { duration: 0.3, type: "spring" },
										}}
									>
										{item?.props?.children[0].props?.children[0]}
									</Link>
								);

								const words = groupStringToArray(item?.props?.children[0]);

								return (

									words.map((word, wordIndex) => (
										<Word key={wordIndex} className="type-h1">
											{word.map((letter: string, letterIndex: number) => (
												letter === " " ? (
													<SpecialSpace key={letterIndex} className="type-h1">{" "}</SpecialSpace>
												) : (
													<SpecialSpan
														className="type-h1"
														key={`${letterIndex}-${randomIntFromInterval(1, 100000)}`}
														whileHover={{
															x: randomIntFromInterval(-20, 20),
															y: randomIntFromInterval(-20, 20),
															scale: randomIntFromInterval(1, 1.05),
															rotate: randomIntFromInterval(-45, 45),
															transition: { duration: 0.3, type: "spring" },
														}}
													>
														{letter}
													</SpecialSpan>)
											))}
										</Word>
									))
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
