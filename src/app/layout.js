import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casino App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='relative'>
          <Sidebar />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
