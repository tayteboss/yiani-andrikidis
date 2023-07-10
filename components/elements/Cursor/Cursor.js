import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMousePosition } from '../../../hooks/useMousePosition';

const CursorWrapper = styled.div`
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.isOnDevice ? 'none' : 'block')};
	mix-blend-mode: difference;
	color: var(--colour-white);
	width: 100px;
	height: 100px;
	pointer-events: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const CursorText = styled(motion.div)`
	color: var(--colour-white);
	font-size: 1.5rem;
	position: fixed;
	top: -25px;
	left: -15px;
	pointer-events: none;
	opacity: ${(props) => (props.$isHovering ? 1 : 0)};
`;

const Cursor = ({ cursorRefresh }) => {
	const [isHovering, setIsHovering] = useState(false)
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	const mouseXPosition = position.x;
	const mouseYPosition = position.y;

	const variantsWrapper = {
		hidden: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.05,
				stiffness: 1000,
				damping: 40,
				ease: 'linear',
			},
		},
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.05,
				stiffness: 1000,
				damping: 40,
				ease: 'linear',
			},
		},
	};

	useEffect(() => {
		const featuredProjectsWrapper = document.querySelectorAll('.featured-projects');

		featuredProjectsWrapper.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHovering(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHovering(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [router.asPath, cursorRefresh]);

	useEffect(() => {
		setIsHovering(false);
	}, [router.asPath, cursorRefresh]);

	return (
		<CursorWrapper
			isOnDevice={isOnDevice}
		>
			<CursorText
				variants={variantsWrapper}
				initial="hidden"
				animate="visible"
				$isHovering={isHovering}
				className="type-h4"
			>
				Drag
			</CursorText>
		</CursorWrapper>
	);
};

export default Cursor;
