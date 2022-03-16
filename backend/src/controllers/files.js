import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class FilesControllers {
  static read() {
    const json = readFileSync(join(__dirname, '../db/db.json'))
    const data = JSON.parse(json)
    return data
  }

  static write(data) {
    writeFileSync(join(__dirname, '../db/db.json'), JSON.stringify(data))
  }
}

export default FilesControllers;