"use client"
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Loginlogout() {
    const { user, error, isLoading } = useUser();

    return (
        <div className='w-full text-center hover:bg-green-400'>
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
        </div>
      );
  }