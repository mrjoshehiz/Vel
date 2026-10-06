'use client';
import {useEffect,useRef,useState} from 'react';

const frames=[
  {image:'/images/moving-wine.webp',title:'A little evening drama.',alt:'Woman in a wine draped dress walking through a sunlit stone courtyard'},
  {image:'/images/moving-ivory.webp',title:'Room to move.',alt:'Woman in an ivory waistcoat and wide-leg trousers in an airy gallery'},
  {image:'/images/moving-indigo.webp',title:'Shape with character.',alt:'Woman in a sculptural indigo blouse beside a warm architectural wall'},
];

export function MovingEditorial(){
  const [visible,setVisible]=useState(false);
  const [ready,setReady]=useState(false);
  const section=useRef<HTMLElement>(null);
  useEffect(()=>{
    if(!section.current)return;
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:0});
    observer.observe(section.current);
    let active=true;
    // Decode every loop frame, including offscreen duplicates, before movement.
    // Lazy loading can leave transformed frames blank when they enter the strip.
    const images=Array.from(section.current.querySelectorAll('img'));
    Promise.all(images.map(image=>image.decode())).then(()=>{
      if(active)setReady(true);
    }).catch(()=>{/* Keep the strip still if an asset cannot load. */});
    return ()=>{active=false;observer.disconnect()};
  },[]);
  return <section ref={section} className="moving-editorial" aria-labelledby="moving-editorial-title">
    <div className="section-wrap moving-editorial-heading">
      <div><span className="eyebrow">THE EVERYDAY EDITORIAL</span><h2 id="moving-editorial-title">Between moments.</h2><p>Three silhouettes, seen in a different light.</p></div>
      <div className="moving-editorial-actions"><a className="text-link" href="/runway">View the lookbook</a></div>
    </div>
    <div id="moving-editorial-gallery" className="moving-editorial-window">
      <div className="moving-editorial-track" data-paused={!visible||!ready}>
        {[false,true].map(duplicate=><div key={String(duplicate)} className="moving-editorial-group" aria-hidden={duplicate||undefined}>{frames.map(frame=><figure className="moving-editorial-frame" key={frame.image}><img src={frame.image} alt={duplicate?'':frame.alt} width={1024} height={1536} loading="eager" decoding="async"/><figcaption>{frame.title}</figcaption></figure>)}</div>)}
      </div>
    </div>
  </section>;
}
