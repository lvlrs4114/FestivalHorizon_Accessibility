import { readFileSync } from 'node:fs'

const read = path => readFileSync(path, 'utf8')
const checks = []
const robotsOnly = process.argv.includes('--robots')
const robots = read('public/robots.txt')
const artistIds = [...read('src/data/artists.ts').matchAll(/id:\s*'([^']+)'/g)].map(match => match[1])
const blockedArtists = artistIds.filter(id => robots.split(/\r?\n/).some(line => /^\s*Disallow:\s*\/artistes\//i.test(line) && line.includes(`/artistes/${id}`)))
checks.push(['robots', 'Les fiches artistes ne sont pas bloquées par robots.txt', blockedArtists.length === 0])

const base = read('src/config/site.ts').match(/PUBLIC_SITE_URL\s*=\s*'([^']+)'/)?.[1]
const sitemap = read('public/sitemap.xml')
const locations = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(match => match[1].trim())
const programSlugs = [...read('src/data/program.ts').matchAll(/slug:\s*'([^']+)'/g)].map(match => match[1])
const expectedPaths = ['/', '/programme', '/billetterie', '/infos-pratiques', '/archives/2026', ...artistIds.map(id => `/artistes/${id}`), ...programSlugs.map(slug => `/concerts/${slug}`)]
const actualPaths = locations.map(value => { try { return new URL(value).pathname } catch { return '' } })
const sitemapOk = Boolean(base) && new Set(locations).size === locations.length && locations.every(value => { try { return new URL(value).origin === base } catch { return false } }) && expectedPaths.every(path => actualPaths.includes(path)) && actualPaths.every(path => expectedPaths.includes(path))
checks.push(['sitemap', 'Le sitemap correspond aux routes publiques et au domaine configuré', sitemapOk])

const metadata = read('src/data/pageMetadata.ts')
const canonicalFor = path => {
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const entry = metadata.match(new RegExp(`['"]${escaped}['"]\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`))?.[1]
  const suffix = entry?.match(/canonical:\s*`\$\{PUBLIC_SITE_URL\}([^`]+)`/)?.[1]
  return suffix === path || (path === '/' && suffix === '/')
}
checks.push(['canonical', 'Les canonical accueil/programme sont cohérentes avec leur route', canonicalFor('/') && canonicalFor('/programme')])
checks.push(['sitemap', 'Le domaine du sitemap est configuré', Boolean(base && /^https:\/\//.test(base))])

const selectedChecks = robotsOnly ? checks.filter(([group]) => group === 'robots') : checks
console.log(`MISSION 4${robotsOnly ? ' — contrôle robots' : ' — Opération sauver le festival'}`)
for (const [, label, ok] of selectedChecks) console.log(`${ok ? '[OK]' : '[À REVOIR]'} ${label}`)
if (selectedChecks.some(([, , ok]) => !ok)) process.exitCode = 1
