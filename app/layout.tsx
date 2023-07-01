import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({weight: '100', subsets: ['latin'], style:['normal'], preload: false,})

export const metadata = {
  title: 'Eiker Home page',
  description: 'SignNature, firmas de documentos, contratos, firma digital',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
