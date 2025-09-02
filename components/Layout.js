//Font
import { Sora } from '@next/font/google';

//Font Settings
const sora = Sora ({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//Component
import Nav from '../components/Nav';
import Header from '../components/Header';
const Layout = ({children}) => {
  return (
    <div className={`page bg-black text-white bg-no-repeat ${sora.variable} font-sora relative`}>
          <Nav/>
          <Header/>
        { children }
    </div>
    )
}

export default Layout;
