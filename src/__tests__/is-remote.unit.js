import { expect, describe, it } from '@jest/globals'
import isRemote from '../is-remote.js'

const testCases = [
  {
    description: 'Location is local',
    target: './test.json',
    expectedResult: false
  },
  {
    description: 'Location is local',
    target: '/local/test.json',
    expectedResult: false
  },
  {
    description: 'Location is remote',
    target: 'http://www.google.com',
    expectedResult: true
  },
  {
    description: 'Location is remote',
    target: 'https://google.com',
    expectedResult: true
  },
  {
    description: 'Location is local',
    target: 'file:///foo.txt',
    expectedResult: false
  },
  {
    description: 'Location is local',
    target: 'file://localhost/etc/fstab',
    expectedResult: false
  }
]

describe.each(testCases)(
  'Test the Fetcher helper with test cases',
  ({ description, target, expectedResult }) => {
    it(description, async () => {
      const results = isRemote(target)

      expect(results).toEqual(expectedResult)
    })
  }
)
