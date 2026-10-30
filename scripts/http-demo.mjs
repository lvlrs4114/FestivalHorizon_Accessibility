import {createServer} from 'node:http'
import {pathToFileURL} from 'node:url'
export function handleDemoRequest(request,response){
 const path=new URL(request.url??'/',`http://${request.headers?.host??'localhost'}`).pathname
 if(path==='/ancienne-programmation'){response.writeHead(301,{Location:'/programme','Cache-Control':'no-store'});response.end();return}
 if(path==='/ressources/archive-2025'){response.writeHead(410,{'Content-Type':'text/plain; charset=utf-8'});response.end('Cette ressource a été retirée définitivement.');return}
 if(path==='/inconnue'){response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});response.end('Ressource introuvable.');return}
 response.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});response.end('Ressource disponible — HTTP 200.')
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const server=createServer(handleDemoRequest);server.on('error',error=>{console.error(`Impossible de démarrer le serveur de démonstration : ${error.message}`);process.exitCode=1});server.listen(4174,'127.0.0.1',()=>console.log('Démo HTTP sur http://127.0.0.1:4174\nEssayez /, /ancienne-programmation, /inconnue et /ressources/archive-2025. Ctrl+C pour arrêter.'))}
