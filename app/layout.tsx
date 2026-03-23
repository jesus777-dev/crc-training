import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechLearn Pro - CRC Training',
  description: 'Progressive Web App for volunteer training modules',
  manifest: '/crc-training/manifest.json',
  themeColor: '#0F1419',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TechLearn Pro" />
        <link rel="icon" href="/crc-training/favicon.ico" />
        <link rel="apple-touch-icon" href="/crc-training/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
