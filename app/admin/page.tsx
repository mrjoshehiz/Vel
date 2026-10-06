import {getChatGPTUser,chatGPTSignInPath} from '@/app/chatgpt-auth';
import {isAdmin} from '@/lib/access';
import {catalogue,database} from '@/lib/database';
import {Admin,type AdminOrder,type AdminReview} from '@/components/store/admin';
import type {Product} from '@/lib/products';
export const dynamic='force-dynamic';
export default async function Page(){const user=await getChatGPTUser();if(!user)return <main className="page empty"><h1>Sign in to continue.</h1><a className="button" target="_top" href={chatGPTSignInPath('/admin')}>Sign in with ChatGPT</a></main>;if(!await isAdmin())return <main className="page empty"><h1>Owner access required.</h1><p>This dashboard is available to the configured store owner.</p><a className="text-link" href="/account">Return to your account</a></main>;let data:{products:Product[];orders:AdminOrder[];reviews:AdminReview[]}|null=null;try{const products=await catalogue(true);const db=database();const [orders,reviews]=await Promise.all([db.prepare('SELECT * FROM orders ORDER BY created_at DESC LIMIT 100').all<AdminOrder>(),db.prepare('SELECT * FROM reviews ORDER BY created_at DESC LIMIT 100').all<AdminReview>()]);data={products,orders:orders.results,reviews:reviews.results}}catch{}if(!data)return <main className="page empty"><h1>The desk is unavailable.</h1><p>Please try again shortly.</p></main>;return <Admin {...data}/>}
