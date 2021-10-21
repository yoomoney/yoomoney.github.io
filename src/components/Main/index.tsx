import * as React from 'react';
import styled from 'styled-components'

import {Props} from './types';

const StyledMain = styled.main``;

export const Main = ({children}: Props) => {
	return <StyledMain>{children}</StyledMain>
};
