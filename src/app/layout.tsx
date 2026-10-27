import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://igniteagency.com'),
  title: 'Melbourne Web Design & Development Agency | IGNITE®',
  description: 'IGNITE® is a Melbourne-based web design and development agency creating high-performing websites for schools, NFPs and ambitious brands.',
  icons: {
    icon: '/images/661f63ba4c8721b8d46efdc5_ignite-bolt-icon_infrared_32x32.png',
    apple: '/images/661f63bd7c7ec976175d1ecd_ignite-bolt-icon_infrared_256x256.png',
  },
  openGraph: {
    title: 'Melbourne Web Design & Development Agency | IGNITE®',
    description: 'IGNITE® is a Melbourne-based web design and development agency creating high-performing websites for schools, NFPs and ambitious brands.',
    images: ['/images/67f606f0db463590ee2733a5_og-image-ignite.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#ff3454] selection:text-white">
        {children}
      </body>
    </html>
  );
}
