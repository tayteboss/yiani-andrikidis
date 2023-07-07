import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useViewportWidth from '../../../hooks/useViewportWidth';

type StyledProps = {
	$isActive: boolean;
}

const FilterWidgetWrapper = styled.div`
	position: fixed;
	bottom: ${pxToRem(16)};
	left: 50%;
	transform: translateX(-50%);
	height: 52px;
	background: rgba(242, 242, 244, 0.5);
	border: 1px solid var(--colour-black200);
	backdrop-filter: blur(5px);
	border-radius: 100px;
	display: flex;
	align-items: center;
	z-index: 55;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		left: ${pxToRem(16)};
		transform: translateX(0);
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		left: ${pxToRem(8)};
	}
`;

const TitleWrapper = styled.div`
	padding: ${pxToRem(8)} ${pxToRem(12)} ${pxToRem(8)} ${pxToRem(16)};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.div`
	color: var(--colour-black800);
`;

const FiltersWrapper = styled(motion.div)`
	background: var(--colour-white);
	height: 100%;
	width: 100%;
	padding: 0 ${pxToRem(24)};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
`;

const ActiveFilterWrapper = styled(motion.div)``;

const ActiveFilter = styled.p`
	color: var(--colour-blue);
`;

const AllFiltersWrapper = styled(motion.div)`
	display: flex;
	column-gap: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		column-gap: ${pxToRem(8)};
	}
`;

const FilterTrigger = styled(motion.button)<StyledProps>`
	color: ${(props) => props.$isActive ? 'var(--colour-blue)' : 'var(--colour-black600)'};
`;

const titleWrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const filterWrapperVariants = {
	hidden: {
		width: 50,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			staggerDirection: -1,
			when: 'afterChildren',
		}
	},
	visible: {
		width: 'auto',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'beforeChildren',
		}
	}
};

const childVariants = {
	hidden: {
		opacity: 0,
		x: -2,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	setActiveFilter: (filter: string) => void;
	activeFilter: string;
}

const FilterWidget = (props: Props) => {
	const { setActiveFilter, activeFilter } = props;

	const [isHovered, setIsHovered] = useState(false);

	const viewport = useViewportWidth();

	const capitalise = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	useEffect(() => {
		if (viewport === 'mobile' || viewport === 'tabletPortrait') {
			setIsHovered(false);
		};
	}, [activeFilter]);

	return (
		<FilterWidgetWrapper
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<TitleWrapper>
				<Title className="type-h4">Filter</Title>
			</TitleWrapper>
			<FiltersWrapper>
				<AnimatePresence mode="wait">
					{!isHovered && (
						<ActiveFilterWrapper
							key={1}
							variants={titleWrapperVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'
						>
							<ActiveFilter className="type-h4">
								{capitalise(activeFilter)}
							</ActiveFilter>
						</ActiveFilterWrapper>
					)}
					{isHovered && (
						<AllFiltersWrapper
							key={2}
							variants={filterWrapperVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'
							layout
						>
							<FilterTrigger
								className="type-h4"
								variants={childVariants}
								onClick={() => setActiveFilter('none')}
								$isActive={activeFilter === 'none'}
							>
								None
							</FilterTrigger>
							<FilterTrigger
								className="type-h4"
								variants={childVariants}
								onClick={() => setActiveFilter('commercial')}
								$isActive={activeFilter === 'commercial'}
							>
								Commercial
							</FilterTrigger>
							<FilterTrigger
								className="type-h4"
								variants={childVariants}
								onClick={() => setActiveFilter('music')}
								$isActive={activeFilter === 'music'}
							>
								Music
							</FilterTrigger>
							<FilterTrigger
								className="type-h4"
								variants={childVariants}
								onClick={() => setActiveFilter('narrative')}
								$isActive={activeFilter === 'narrative'}
							>
								Narrative
							</FilterTrigger>
						</AllFiltersWrapper>
					)}
				</AnimatePresence>
			</FiltersWrapper>
		</FilterWidgetWrapper>
	);
};

export default FilterWidget;
