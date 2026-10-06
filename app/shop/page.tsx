import {Catalog} from '@/components/store/catalog';
import {catalogue} from '@/lib/database';
import {collection} from '@/lib/products';
export const dynamic='force-dynamic';
export default async function Shop({searchParams}:{searchParams:Promise<{category?:string}>}){const {category}=await searchParams;let products=collection;try{products=await catalogue()}catch{}return <Catalog key={category||'All'} products={products} initialCategory={['Dresses','Sets','Tops'].includes(category||'')?category:'All'}/>}
