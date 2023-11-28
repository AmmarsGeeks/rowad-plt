
import './globals.css'
import './App.css';
import './styles/Navbar.css';
import './styles/HeroArea.css';
import './styles/WhoWeAre.css';
import './styles/Footer.css';

import { Almarai  , Jomhuria} from 'next/font/google'

export const metadata = {
  title: 'منصة رواد',
  description: 'منصة رواد لخدمة ومساعدة رواد األعمال',
}

 const almarai = Almarai({
  subsets: ['arabic'],
  weight: [  '300' , '400' , '700' , '800']
})

 const jomhuria = Jomhuria({
  subsets: ['arabic'],
  weight: [ '400' ]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={almarai.className}>{children}</body>
    </html>
  )
}
