import {StoreTools} from '@/components/store/webmcp';
import type {Metadata} from 'next';
import './globals.css';
import {BagProvider} from '@/components/store/bag-context';
import {Navigation,Footer} from '@/components/store/navigation';
import {Verola} from '@/components/store/verola';
export const metadata:Metadata={title:'VELMORA | The art of getting dressed',description:'Contemporary Nigerian womenswear. Discover dresses, sets and tops, explore styling ideas and request your pieces.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><BagProvider><StoreTools/><Navigation/><div id="content" tabIndex={-1}>{children}</div><Footer/><Verola/></BagProvider></body></html>}
