import type { Metadata } from 'next'
import './globals.css'

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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5N2QVPXC');` }} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PFSX1VQMPG"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-PFSX1VQMPG');` }} />
        <link rel="preload" href="/fonts/PNU-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/PNU-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.png" type="image/png"/>
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N2QVPXC" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
      </body>
    </html>
  )
}
