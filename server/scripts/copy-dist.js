import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const clientDist = path.resolve(repoRoot, 'client/dist')
const serverPublic = path.resolve(repoRoot, 'server/public')

function rm(dir) {
  if (!fs.existsSync(dir)) return
  fs.rmSync(dir, { recursive: true, force: true })
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

if (!fs.existsSync(clientDist)) {
  console.error('client/dist not found. Run: npm run build -w client')
  process.exit(1)
}

rm(serverPublic)
copyDir(clientDist, serverPublic)
console.log('Copied client/dist -> server/public')
