import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientLayout from './ClientLayout';
import '@/shared/styles/globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test',
  description: 'Your site description goes here',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description goes here',
    url: 'https://yoursite.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yoursite.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
