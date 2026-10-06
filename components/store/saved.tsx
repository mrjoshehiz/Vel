'use client';
import {useState} from 'react';
import {type Product} from '@/lib/products';
import {Piece} from './piece';
export function Saved({initial}:{initial:Product[]}){const [products,setProducts]=useState(initial);return <main className="page"><div className="page-heading"><h1>Your saved pieces.</h1><p>A second look, whenever you like.</p></div>{products.length?<div className="product-grid">{products.map(p=><Piece key={p.id} product={p} initialSaved onRemoved={()=>setProducts(current=>current.filter(x=>x.id!==p.id))}/>)}</div>:<div className="empty"><h2>Make room for a favourite.</h2><a className="button" href="/shop">Explore the collection</a></div>}</main>}
