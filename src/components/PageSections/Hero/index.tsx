import * as React from 'react';
import styled from 'styled-components';
import {StaticImage} from 'gatsby-plugin-image';

import {Text} from '../../Text';
import {Title} from '../../Title';
import {Section} from '../../Section';

const StyledSection = styled(Section)`
	display: flex;
	flex-wrap: wrap-reverse;
`;

export const Hero = () => {
	return (
		<StyledSection indent='xxxl'>
			<Section size='l'>
				<Title size='l'>Открываемся для&nbsp;разработчиков</Title>
				<Text size='l'>
					Open Source помогает нам делать успешные и полезные продукты, которые меняют финтех-разработку. Поэтому мы делимся кодом с вами.
				</Text>
			</Section>
			<Section size='m'>
				<StaticImage
					width={550}
					quality={95}
					placeholder='none'
					alt='YooMoney Open Source'
					style={{overflow: 'visible'}}
					src='../../../assets/images/source.png'
				/>
			</Section>
		</StyledSection>
	);
};
