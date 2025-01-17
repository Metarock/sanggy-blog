'use client';

import { Undo } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-2xl">Page not found</p>

      <Button
        asChild
        className="mt-4"
      >
        <Link href="/">
          <Undo className="mr-2 size-4" /> Go to homepage
        </Link>
      </Button>
    </div>
  );
};
