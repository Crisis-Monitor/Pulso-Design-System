import type { ReactNode } from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Metadata } from 'next';
import 'nextra-theme-docs/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: { template: '%s – Pulso DS', default: 'Pulso Design System' },
  description: 'Design tokens, components and patterns for crisis management interfaces',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Layout
          navbar={
            <Navbar
              logo={<b>Pulso DS</b>}
              projectLink="https://github.com/nevton/pulso-design-system"
            />
          }
          footer={<Footer>Pulso Design System</Footer>}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/nevton/pulso-design-system/tree/main"
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
