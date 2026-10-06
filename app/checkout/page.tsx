import {Checkout} from '@/components/store/checkout';
export default async function Page({searchParams}:{searchParams:Promise<{demo?:string}>}){return <Checkout demo={(await searchParams).demo==='1'}/>}
