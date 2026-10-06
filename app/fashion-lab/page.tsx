import {catalogue} from '@/lib/database';
import {collection} from '@/lib/products';
import {FashionLab} from '@/components/store/fashion-lab';
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{piece?:string}>}){let products=collection;try{products=await catalogue()}catch{}return <FashionLab products={products} initial={(await searchParams).piece}/>}
