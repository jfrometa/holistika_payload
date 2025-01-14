import './globals.css';
import '@/scss/main.scss';

import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import React from 'react';

import Footer3 from '@/app/(frontend)/components/footers/Footer3';
import { AdminBar } from '@/components/AdminBar';
import { LivePreviewListener } from '@/components/LivePreviewListener';
import { Footer } from '@/Footer/Component';
import { Header } from '@/Header/Component';
import { Providers } from '@/providers';
import { InitTheme } from '@/providers/Theme/InitTheme';
import { cn } from '@/utilities/cn';
import { getServerSideURL } from '@/utilities/getURL';
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph';

// Import the client component separately
import LayoutClient from './layout_client'; // This is the new file you'll create



export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
};

// This is a server component by default (no 'use client' at top)
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Any server-side logic goes here:
  const isEnabled = false; // Suppose you get this from `draftMode()` or server calls.

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="active-dark-mode">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <AdminBar adminBarProps={{ preview: isEnabled }} />
            <LivePreviewListener />
            <Analytics />
            <Header />
            {/* Insert the client component here */}
            <LayoutClient>
              <main className="flex-grow splash-wrapper scrollSpyLinks">{children}</main>
            </LayoutClient>
            <Footer3 />
          </div>
        </Providers>
      </body>
    </html>
  );
}
