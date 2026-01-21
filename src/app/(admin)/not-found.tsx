import Link from 'next/link';
import { route } from '@/constants';

export default async function AdminNotFound() {
	return (
		<div className="flex-1 ui-flex-center h-screen">
			<h1 className="ui-flex-center p-4 text-black text-2xl font-black rounded-lg">Designthou</h1>
			<p className="font-semibold text-base">404</p>
			<Link href={route.ADMIN.DASHBOARD} className="p-3 bg-black text-white rounded-lg">
				홈으로 가기
			</Link>
		</div>
	);
}
