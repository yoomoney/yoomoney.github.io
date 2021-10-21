export type Props = {
	id?: string;
	sublink?: {
		url: string;
		fullText: string;
		shortText: string;
	};
	size: 's' | 'm' | 'l';
	children: React.ReactNode;
}
