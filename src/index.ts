import {Command, flags} from '@oclif/command'

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
    const core = new Core()
    const result = await core.execute(args.path || flags.path)
    this.log(JSON.stringify(result))
  }
}

export = Percents
