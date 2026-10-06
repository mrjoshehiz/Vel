import {Catalog} from '@/components/store/catalog';
import {catalogue} from '@/lib/database';
import {collection} from '@/lib/products';
export const dynamic='force-dynamic';
export default async function Search(){let products=collection;try{products=await catalogue()}catch{}return <Catalog products={products} search/>}
