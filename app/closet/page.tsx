import {collection} from '@/lib/products';
import {Closet} from '@/components/store/closet';
export default function Page(){return <Closet products={collection}/>}
