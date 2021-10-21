import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import {StyledHeader, StyledHeaderWrap, StyledControl, StyledNav, StyledMenuItem} from './styled';

import {MENU_ITEMS} from './constants';

export const Header = () => {
	const [showItems, setShowItems] = React.useState(false);

	return (
		<StyledHeader>
			<StyledHeaderWrap>
				<StaticImage
					width={190}
					alt='YooMoney'
					layout='fixed'
					placeholder='none'
					style={{overflow: 'visible'}}
					src='../../assets/images/iomoney.png'
				/>
				<StyledControl showItems={showItems} onClick={() => setShowItems(!showItems)}/>
			</StyledHeaderWrap>
			<StyledNav showItems={showItems}>
				{
					MENU_ITEMS.map(({id, text}, key) => {
						const href = `#${id}`;

						return (
							<StyledMenuItem href={href} key={key} showItems={showItems}>
								{text}
							</StyledMenuItem>
						);
					})
				}
			</StyledNav>
		</StyledHeader>
	);
};
