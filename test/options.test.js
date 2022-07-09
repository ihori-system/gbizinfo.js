/* eslint-env jest */

const { GbizinfoClient } = require('..')

test('throws without option', () => {
  const options = undefined
  expect(() => new GbizinfoClient(options)).toThrow()
})

test('throws without `token` option', () => {
  expect(() => new GbizinfoClient({})).toThrow()
})

test('not to throw with `token` option', () => {
  expect(() => new GbizinfoClient({ token: 'xxxxx' })).not.toThrow()
})
