"use client"
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Loginlogout() {
    const { user, error, isLoading } = useUser();

    return (
        <nav>
          {user ? (
            <>
              <a href="/api/auth/logout">
                Logout
              </a>
            </>
          ) : (
            <a href="/api/auth/login">
              Login
            </a>
          )}
        </nav>
      );
  }