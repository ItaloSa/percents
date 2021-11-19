import glob from 'glob'
import Core from '../core'

jest.mock('glob')
const globMock = (glob as unknown as jest.Mock)

const implementation = (returnTs = true) => (pattern, callback) => {
  if (pattern.includes('js')) {
    callback(null, ['src/aa.js', 'src/bb.js', 'src/cc.js'])
  } else {
    callback(null, returnTs ? ['src/aa.ts'] : [])
  }
}

describe('Core', () => {
  it('should calculate the data properly', async () => {
    const spy = globMock.mockImplementation(implementation())
    const directory = 'src'

    const core = new Core()
    const result = await core.execute(directory)

    expect(spy).toBeCalledTimes(2)
    expect(spy.mock.calls[0][0]).toBe(`${directory}/**/*.js*`)
    expect(spy.mock.calls[1][0]).toBe(`${directory}/**/*.ts*`)
    expect(result).toMatchObject({
      jsFiles: ['src/aa.js', 'src/bb.js', 'src/cc.js'],
      tsFiles: ['src/aa.ts'],
      jsCount: 3,
      tsCount: 1,
      total: 4,
      percent: 25,
    })
  })

  it('should throw an error when an error occurrs with glob', async () => {
    globMock.mockImplementation((pattern, callback) => {
      callback(new Error('error'))
    })
    const directory = 'src'
    const core = new Core()
    core.execute(directory).catch(error => expect(error).toEqual('error'))
  })

  describe('when there is not ts files', () => {
    it('should return the percent equal 0', async () => {
      globMock.mockImplementation(implementation(false))
      const directory = 'src'

      const core = new Core()
      const result = await core.execute(directory)

      expect(result.percent).toBe(0)
    })
  })
})
