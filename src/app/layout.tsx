import type { ReactNode } from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Metadata } from 'next';
import 'nextra-theme-docs/style.css';
import { SidebarCollapseActive } from './sidebar-collapse-active';
import './globals.css';

export const metadata: Metadata = {
  title: { template: '%s – Pulso DS', default: 'Pulso Design System' },
  description: 'Design tokens, componentes e padrões para interfaces de gestão de crises',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <SidebarCollapseActive />
        <Layout
          navbar={
            <Navbar
              logo={<b>Pulso DS</b>}
              projectLink="https://github.com/Crisis-Monitor/Pulso-Design-System"
            />
          }
          footer={<Footer>Pulso Design System</Footer>}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/Crisis-Monitor/Pulso-Design-System/tree/main"
          editLink="Editar esta página no GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
