import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledSection = styled.section<{size?: Props['size'], indent?: Props['indent']}>`
	--snippet-width-m: 550px;
	--snippet-width-l: 650px;
	--snippet-width-auto: auto;

	max-width: var(--snippet-width-${({size}) => size || 'auto'});
	margin-bottom: var(--space-${({indent}) => indent || 'm'});
`;

export const Section = ({children, size, indent, className}: Props) => (
	<StyledSection size={size} indent={indent} className={className}>
		{children}
	</StyledSection>
);
