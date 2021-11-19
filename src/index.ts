import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import Core from './core'
class Percents extends Command {
  static description = 'Generates a report of the current TypeScript migration status'

  static flags = {
    version: flags.version({char: 'v', description: 'to print the current version'}),
    help: flags.help({char: 'h', description: 'to print the help'}),
    path: flags.string({char: 'p', default: 'src', description: 'to set the path where will be analyzed'}),
  }

  static args = [{name: 'path'}]

  async run() {
    const {args, flags} = this.parse(Percents)
    const path = args.path || flags.path
    const core = new Core()

    cli.action.start(`% scanning ${path}`)
    const result = await core.execute(path)
    cli.action.stop('done \n')
    this.log(`╔ RESULTS \n║ \n╠ Total: ${result.total} \n╠ JavaScript files: ${result.jsCount} \n╠ TypeScript files: ${result.tsCount} \n╠ Migration status: ${result.percent.toFixed(2)}% \n║ \n╚ by percents\n`)
  }
}

export = Percents
