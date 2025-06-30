import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '8dmg - DMG File Extractor & Converter',
  description: 'Extract and convert DMG files easily with 8dmg - the ultimate DMG file utility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">💿</div>
              <h1 className="text-2xl font-bold">
                <a href="/" className="hover:text-purple-200">8dmg</a>
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="hover:text-purple-200">Features</a>
              <a href="#download" className="hover:text-purple-200">Download</a>
              <a href="#support" className="hover:text-purple-200">Support</a>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-8 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 8dmg. All rights reserved. | DMG File Extraction Made Simple</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
