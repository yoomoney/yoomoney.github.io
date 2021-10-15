import * as React from 'react';
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';

import {MENU_ITEMS} from './constants';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: var(--space-xxxxl);
`;

const StyledNav = styled.nav`
	display: flex;
`;

const StyledMenuItem = styled.a`
	color: var(--color-typo-inverse);
	font-size: var(--size-typo-s); 
	margin: 0 var(--space-s);
`;

export const Header = () => {
	return (
		<StyledHeader>
			<StaticImage
				src='../../assets/images/iomoney.png'
				alt='YooMoney'
				width={190}
				layout='fixed'
				style={{overflow: 'visible'}}
			/>
			<StyledNav>
				{
					MENU_ITEMS.map(({id, text}, key) => {
						const href = `#${id}`;

						return (
							<StyledMenuItem href={href} key={key}>
								{text}
							</StyledMenuItem>
						);
					})
				}
			</StyledNav>
		</StyledHeader>
	);
};
