/* eslint-disable no-console */
import * as glob from 'glob'

export const defauts: string[] = ['src/**']

export default class Core {
  async execute(directory: string) {
    const jsFiles = await this.getFiles(`${directory}/**/*.js*`)
    const tsFiles = await this.getFiles(`${directory}/**/*.ts*`)

    const jsCount = jsFiles.length
    const tsCount = tsFiles.length

    const total = jsCount + tsCount

    return {
      jsFiles,
      tsFiles,
      jsCount,
      tsCount,
      total,
      percent: (tsCount && jsCount) ? ((tsCount / total) * 100) : 0,
    }
  }

  getFiles(pattern: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      glob(pattern, function (err, files) {
        if (err) {
          reject(err)
        }
        resolve(files)
      })
    })
  }
}
