import { useEffect } from 'react'
import { pageMetadata } from '../data/pageMetadata'
type Props={path:string;title:string;description?:string;canonical?:string;robots?:string}
function setMeta(name:string,content?:string){let element=document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);if(!content){element?.remove();return}if(!element){element=document.createElement('meta');element.name=name;document.head.append(element)}element.content=content}
function setCanonical(href?:string){let link=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!href){link?.remove();return}if(!link){link=document.createElement('link');link.rel='canonical';document.head.append(link)}link.href=href}
export default function PageMetadata({path,title,description,canonical,robots}:Props){useEffect(()=>{const configured=pageMetadata[path]??{};document.title=configured.title??title;setMeta('description',description??configured.description);setMeta('robots',robots??configured.robots);setCanonical(canonical??configured.canonical);},[path,title,description,canonical,robots]);return null}
