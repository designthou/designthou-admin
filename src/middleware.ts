import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { route } from './constants';

export async function middleware(request: NextRequest) {
	const { supabaseResponse, user } = await updateSession(request);
	const pathname = request.nextUrl.pathname;

	const publicPrefixes = [route.AUTH.LOGIN, route.AUTH.SIGNUP, route.AUTH.RESET_PASSWORD, route.AUTH.SIGNUP_CONFIRM, '/favicon.ico'];

	const isPublic = publicPrefixes.some(p => pathname.startsWith(p));
	if (isPublic) {
		return supabaseResponse;
	}

	if (!user) {
		const redirectUrl = new URL(route.AUTH.LOGIN, request.url);

		redirectUrl.searchParams.set('next', pathname);

		return NextResponse.redirect(redirectUrl, {
			headers: supabaseResponse.headers,
		});
	}

	return supabaseResponse;
}

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
