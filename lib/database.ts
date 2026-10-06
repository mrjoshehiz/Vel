import {env} from 'cloudflare:workers';
import {collection,type Product} from './products';
export function database(){if(!env.DB)throw Error('The store is temporarily unavailable. Please try again.');return env.DB}
export async function catalogue(all=false):Promise<Product[]>{const db=database();await db.batch(collection.map(p=>db.prepare('INSERT OR IGNORE INTO products (id,slug,name,category,color,price,stock,active,image,description) VALUES (?,?,?,?,?,?,?,?,?,?)').bind(p.id,p.slug,p.name,p.category,p.color,p.price,p.stock,p.active,p.image,p.description)));return (await db.prepare(`SELECT * FROM products ${all?'':'WHERE active=1'} ORDER BY id`).all<Product>()).results}
export type Review={id:string;product_id:string;name:string;rating:number;body:string;status:string};
export async function approvedReviews(product?:string){return (await database().prepare(`SELECT id,product_id,name,rating,body,status FROM reviews WHERE status='Approved' ${product?'AND product_id=?':''} ORDER BY created_at DESC LIMIT 12`).bind(...(product?[product]:[])).all<Review>()).results}
