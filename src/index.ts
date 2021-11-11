import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import Core from './core'
class Percents extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'f', default: 'src'}),
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
