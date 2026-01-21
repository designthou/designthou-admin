import type { Viewport } from 'next';
import '../globals.css';
import { ReactQueryProvider } from '@/providers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AdminMain, AdminNav, Aside, Toaster } from '@/components';
import { createClient } from '@/lib/supabase/server';
import { AuthProvider } from '@/providers';

export const viewport: Viewport = {
	themeColor: '#ffffff',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const supabaseServer = await createClient();
	const {
		data: { user },
	} = await supabaseServer.auth.getUser();
	return (
		<ReactQueryProvider>
			<div className="flex flex-col h-svh min-h-screen">
				<div className="flex flex-1">
					<AuthProvider>
						<Aside user={user} />
						<AdminNav />
						<AdminMain>{children}</AdminMain>
					</AuthProvider>
				</div>
			</div>
			<Toaster />
			<ReactQueryDevtools initialIsOpen={false} />
		</ReactQueryProvider>
	);
}
