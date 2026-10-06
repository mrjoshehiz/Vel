import {catalogue} from '@/lib/database';import {collection} from '@/lib/products';import {Gallery} from '@/components/store/gallery';
export const dynamic='force-dynamic';export default async function Page(){let products=collection;try{products=await catalogue()}catch{}return <Gallery products={products}/>}
