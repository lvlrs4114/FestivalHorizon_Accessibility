import {program} from '../data/program'
export const concerts=program.map(c=>({...c}))
export function concertSlug(c:typeof program[number],_index:number){return c.slug}
