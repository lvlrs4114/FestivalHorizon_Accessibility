import {useState} from 'react'
export default function LayoutShiftImage(){const[loaded,setLoaded]=useState(false);return <div className={`layout-shift-frame ${loaded?'is-loaded':''}`}><img src="/assets/decor.png" alt="Installation lumineuse décorant le site du festival" onLoad={()=>setLoaded(true)}/></div>}
