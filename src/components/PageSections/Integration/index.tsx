import * as React from 'react';

import {Text} from '../../Text';
import {Title} from '../../Title';
import {Section} from '../../Section';
import {BadgeList} from '../../BadgeList';

import {MenuId, ToolsList, CMSList} from '../../../constants';

export const Integration = () => (
	<Section indent='xxxxl'>
		<Section indent='xl'>
			<Title size='m' id={MenuId.Integration}>Интеграция ЮKassa</Title>
			<Text size='l'>При помощи <a href="https://yookassa.ru/developers" target="_blank">документации API ЮKassa</a> вы можете интегрировать в свои процессы наши решения:<br />SDK для разных языков и коробочные решения на базе популярных CMS.</Text>
		</Section>
		<Section>
			<Title size='s'>Наборы средств разработки</Title>
			<BadgeList items={ToolsList} />
		</Section>
		<Section>
			<Title size='s'>Системы управления содержимым</Title>
			<BadgeList items={CMSList} />
		</Section>
	</Section>
);