import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

const root = 'src/assets'
const output = `${root}/generated`
await mkdir(output, { recursive: true })
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat()
}
const files = await walk(`${root}/images`)
for (const file of files.filter((file) => /\.(jpe?g|png)$/i.test(file))) {
  const relative = path.relative(root, file).replace(/\.[^.]+$/, '.webp')
  const target = path.join(output, relative)
  await mkdir(path.dirname(target), { recursive: true })
  const sourceTime = (await stat(file)).mtimeMs
  if (await stat(target).then((s) => s.mtimeMs >= sourceTime, () => false)) continue
  await sharp(file).rotate().resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 80 }).toFile(target)
}
for (const width of [640, 1024, 1600, 1920]) {
  await sharp(`${root}/images/main.jpg`).rotate().resize({ width }).webp({ quality: 82 }).toFile(`${output}/hero-${width}.webp`)
}
console.log('Optimized images prepared.')

// Keep local font families and appearance, but ship compressed WOFF2 files.
const { default: wawoff2 } = await import('wawoff2')
const { readFile, writeFile } = await import('node:fs/promises')
for (const name of await readdir(`${root}/fonts`)) {
  if (!/\.(ttf|otf)$/.test(name)) continue
  const target = `${output}/fonts/${name.replace(/\.(ttf|otf)$/, '.woff2')}`
  await mkdir(path.dirname(target), { recursive: true })
  const sourceTime = (await stat(`${root}/fonts/${name}`)).mtimeMs
  if (await stat(target).then((s) => s.mtimeMs >= sourceTime, () => false)) continue
  await writeFile(target, await wawoff2.compress(await readFile(`${root}/fonts/${name}`)))
}
