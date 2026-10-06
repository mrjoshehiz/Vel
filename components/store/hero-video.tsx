'use client';
import {useEffect,useRef} from 'react';
export function HeroVideo(){
 const video=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
   const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
   const update=()=>{if(preference.matches)video.current?.pause();else void video.current?.play().catch(()=>{});};
   update();preference.addEventListener('change',update);
   return()=>preference.removeEventListener('change',update);
 },[]);
 return <div className="campaign-video"><video ref={video} muted loop playsInline preload="metadata" poster="/images/hero-film-poster.webp" aria-label="Velmora model wearing the Wine Drape in a sunlit courtyard"><source src="/videos/velmora-hero.mp4" type="video/mp4"/></video></div>;
}
