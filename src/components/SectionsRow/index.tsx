import * as React from 'react';
import styled from 'styled-components';

import {Props} from './types';

const StyledSectionsRow = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-l);
	align-items: baseline;
	justify-content: space-between;
`;

export const SectionsRow = ({children}: Props) => (
	<StyledSectionsRow>{children}</StyledSectionsRow>
);
