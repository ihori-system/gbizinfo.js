/* eslint-env jest */

const { validateTimeRangeOptions } = require('../lib/utils')

describe('validateTimeRangeOptions', () => {
  test('throws without argument `page`', () => {
    expect(() => validateTimeRangeOptions()).toThrow()
  })

  test('throws when `page` is not number', () => {
    expect(() => validateTimeRangeOptions('1')).toThrow()
  })

  test('throws without argument `from`', () => {
    expect(() => validateTimeRangeOptions(1)).toThrow()
  })

  test('throws when `from` is not Date', () => {
    expect(() => validateTimeRangeOptions(1, '2021-04-01')).toThrow()
  })

  test('throws without argument `to`', () => {
    expect(() => validateTimeRangeOptions(1, new Date(2021, 3, 1))).toThrow()
  })

  test('throws when `to` is not Date', async () => {
    expect(() => validateTimeRangeOptions(1, new Date(2021, 3, 1), '2021-04-01')).toThrow()
  })
})
