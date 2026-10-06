import {BagPage} from '@/components/store/bag-page';
export default async function Page({searchParams}:{searchParams:Promise<{demo?:string}>}){return <BagPage demo={(await searchParams).demo==='1'}/>}
