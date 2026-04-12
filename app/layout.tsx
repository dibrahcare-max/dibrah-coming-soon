import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'دِبرة — رعاية سعودية أصيلة',
  description: 'كوادر سعودية موثوقة لرعاية أطفالك وكبار السن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.png" type="image/png"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
