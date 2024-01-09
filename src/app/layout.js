import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import localFont from "next/font/local"
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Optimus Prime',
  description: 'Leader of the Cybertron',
}

const myFont = localFont({
  src: "../../public/fonts/MonumentExtended-Regular.otf",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
