import styled from 'styled-components';
import ReactPlayer from 'react-player'
import { AnimatePresence, motion } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

const VideoLightBoxWrapper = styled(motion.div)`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(var(--vh) * 100);
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		padding: 0 ${pxToRem(16)};
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	url: string
	isActive: boolean;
	setShowFullVideo: (data: { isActive: boolean; url: string }) => void;
};

const VideoLightBox = (props: Props) => {
	const {
		url,
		isActive,
		setShowFullVideo
	} = props;


	return (
		<>
			<AnimatePresence>
				{(isActive && url.length > 0) && (
					<VideoLightBoxWrapper
						variants={wrapperVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						onClick={() => setShowFullVideo(
							{ isActive: false, url: "" }
						)}
					>
						<ReactPlayer
							url={url}
							controls={true}
						/>
					</VideoLightBoxWrapper>
				)}
			</AnimatePresence>
		</>
	);
};

export default VideoLightBox;
