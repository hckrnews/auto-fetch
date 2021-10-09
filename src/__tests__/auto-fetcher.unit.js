
import fetch from '../index.js'

describe('Test the auto Fetcher', () => {
  it('It should get the json from the file', async () => {
    const { json } = await fetch('./src/__fixtures__/example.json')

    expect(json()).toEqual({
      test: 'ok'
    })
  })

  it('It should get the text of the file', async () => {
    const { text } = await fetch('./src/__fixtures__/example.json')

    expect(text()).toEqual(`{
    "test": "ok"
}
`)
  })

  it('It should the stream of the file', async () => {
    const { body } = await fetch('./src/__fixtures__/example.json')

    let result = ''
    body.on('data', (chunk) => {
      result += chunk
    })

    body.on('end', () => {
      const data = JSON.parse(result)
      expect(data).toEqual({
        test: 'ok'
      })
    })
  })

  it('It should get the text of the remote file with fetch', async () => {
    const response = await fetch('https://raw.githubusercontent.com/hckrnews/local-fetch/main/src/__fixtures__/example.json')

    expect(await response.json()).toEqual({
      test: 'ok'
    })
  })
})
