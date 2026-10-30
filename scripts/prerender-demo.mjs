import {build} from 'esbuild'
import {renderToStaticMarkup} from 'react-dom/server'
import {mkdir,writeFile,rm} from 'node:fs/promises'
import {pathToFileURL} from 'node:url'
const directory='dist/prerender-demo',bundle=`${directory}/component.mjs`
await mkdir(directory,{recursive:true})
await build({entryPoints:['scripts/prerender-entry.jsx'],bundle:true,format:'esm',platform:'node',packages:'external',outfile:bundle})
const {default:Component}=await import(`${pathToFileURL(process.cwd()+'/'+bundle).href}?v=${Date.now()}`)
const content=renderToStaticMarkup(Component())
const html=`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Festival Horizon — démonstration de pré-rendu</title></head><body><main>${content}</main></body></html>`
await writeFile(`${directory}/index.html`,html)
await rm(bundle)
console.log(`HTML généré depuis le composant React partagé : ${directory}/index.html`)
