import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Psychologist Resume',
  description: 'Elegant CV website for a clinical psychologist',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
