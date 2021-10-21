export type Props = {
	id?: string;
	sublink?: {
		url: string;
		text: string;
	};
	size: 's' | 'm' | 'l';
	children: React.ReactNode;
}
