"use client"
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Loginlogout() {
    const { user, error, isLoading } = useUser();

    return (
        <nav>
          {user ? (
            <>
              <Link href="/api/auth/logout">
                Logout
              </Link>
            </>
          ) : (
            <Link href="/api/auth/login">
              Login
            </Link>
          )}
        </nav>
      );
  }