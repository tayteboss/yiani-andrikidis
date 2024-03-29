import styled from 'styled-components';
import { ReactNode, createContext, useEffect, useState } from 'react';
import Menu from './Menu';
import { useRouter } from 'next/router';

export const MenuContext = createContext<any>(null);

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setMenuIsOpen(false);
	}, [router]);

	useEffect(() => {
		const html = document.querySelector('html');

		if (menuIsOpen) {
			html?.classList.add('no-scroll');
		} else{
			html?.classList.remove('no-scroll');
		}
	}, [menuIsOpen]);

	return (
		<MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
			<Main>{children}</Main>
			<Menu
				menuIsOpen={menuIsOpen}
				setMenuIsOpen={setMenuIsOpen}
			/>
		</MenuContext.Provider>
	);
};

export default Layout;
