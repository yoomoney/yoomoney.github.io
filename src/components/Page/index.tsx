import * as React from 'react';
import styled from 'styled-components';

import '../../assets/styles/fonts.css';
import '../../assets/styles/common.css';
import '../../assets/styles/variables.css';

import {Props} from './types';

const StyledPage = styled.div`
	padding: var(--space-xl) var(--space-xxxl);
	max-width: 1200px;
	margin: 0 auto;
`;

export const Page = ({children}: Props) => {
	return <StyledPage>{children}</StyledPage>
};
