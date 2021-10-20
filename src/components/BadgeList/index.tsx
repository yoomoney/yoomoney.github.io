import * as React from 'react';
import styled from 'styled-components';

import {Badge} from '../Badge';

import {Props} from './types';

const StyledBadgeList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	max-width: 700px;
	gap: var(--space-xxs);
	list-style-type: none;
`;

export const BadgeList = ({items}: Props) => (
	<StyledBadgeList>
		{items.map(({name, url}, key) => (
			<li key={key}>
				<Badge url={url}>{name}</Badge>
			</li>
		))}
	</StyledBadgeList>
);
