import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import {Text} from '../../Text';
import {Title} from '../../Title';
import {Section} from '../../Section';
import {SectionsRow} from '../../SectionsRow';

import {MenuId} from '../../../constants';

export const Products = () => (
	<Section indent='xxxxl'>
		<Title size='m' id={MenuId.Products}>Наши продукты</Title>
		<SectionsRow>
			<Section size='m'>
				<StaticImage
					width={250}
					alt='YooMoney'
					placeholder='none'
					style={{
						overflow: 'visible',
						marginBottom: 'var(--space-m)'
					}}
					src='../../../assets/images/iomoney.png'
				/>
				<Text size='s'>
					Сервис для онлайн-шопинга, оплаты квитанций и повседневных трат. Второй по популярности инструмент электронных платежей в России — у нас зарегистрировано 60 миллионов кошельков.
				</Text>
			</Section>
			<Section size='m'>
				<StaticImage
					width={220}
					alt='YooKassa'
					placeholder='none'
					style={{
						overflow: 'visible',
						marginBottom: 'var(--space-m)'
					}}
					src='../../../assets/images/iokassa.png'
				/>
				<Text size='s'>
					Платформа для электронных платежей и развития бизнеса. Самый популярный сервис по приёму платежей в России — к нам подключено 120 тысяч магазинов.
				</Text>
			</Section>
		</SectionsRow>
	</Section>
);