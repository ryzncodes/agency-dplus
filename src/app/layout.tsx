import '@/shared/styles/globals.scss';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import ClientLayout from './ClientLayout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digitalize Plus | Malaysian Creative Agency',
  description: 'Digitalize Plus is a Malaysian creative agency specializing in digital solutions, web design, branding, and marketing strategies for modern businesses.',
  keywords: ['malaysian creative agency', 'digital agency malaysia', 'web design', 'branding agency', 'digital marketing malaysia', 'digitalize plus'],
  openGraph: {
    title: 'Digitalize Plus',
    description: 'Digitalize Plus is a Malaysian creative agency specializing in digital solutions, web design, branding, and marketing strategies for modern businesses.',
    url: 'https://digitalizeplus.com',
    siteName: 'Digitalize Plus',
    images: [
      {
        url: 'https://digitalizeplus.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_MY',
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
