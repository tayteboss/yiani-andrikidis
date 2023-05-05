import styled from 'styled-components';
import { ReactNode, createContext, useState } from 'react';
import Menu from './Menu';

export const MenuContext = createContext(null);

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	const [menuIsOpen, setMenuIsOpen] = useState(false);

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
