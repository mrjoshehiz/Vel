import {notFound} from 'next/navigation';
import {catalogue,approvedReviews} from '@/lib/database';
import {collection} from '@/lib/products';
import {ProductDetail} from '@/components/store/product-detail';
export const dynamic='force-dynamic';
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;let products=collection;let reviews:Awaited<ReturnType<typeof approvedReviews>>=[];try{products=await catalogue()}catch{}const product=products.find(p=>p.slug===slug);if(!product)notFound();try{reviews=await approvedReviews(product.id)}catch{}return <ProductDetail product={product} reviews={reviews} related={products.filter(p=>p.id!==product.id)}/>}
