const assert = require('assert')
const { GbizinfoClient } = require('../..')
const { CORPORATION_PROPERTIES } = require('./constants')
const { sleep } = require('./utils')

require('dotenv').config()

const client = new GbizinfoClient({ token: process.env.X_HOJININFO_API_TOKEN })

const date = new Date('2018-02-07')

const validate = (d) => {
  if (d.corporate_number == null || d.name == null || d.status == null || d.update_date == null) {
    console.log(d)
  }
  assert.ok(d.corporate_number != null)
  assert.ok(d.name != null)
  assert.ok(d.status != null)
  assert.ok(d.update_date != null)
  const diff = Object.keys(d).filter((k) => CORPORATION_PROPERTIES.includes(k) === false)
  if (diff.length > 0) {
    console.log(d)
    console.log(diff)
  }
  assert.strictEqual(diff.length, 0)
}

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const data = await client.findByTimeRangeRaw(1, date, date)

    assert.ok(data.totalCount != null)
    assert.ok(data.totalPage != null)
    assert.ok(data.pageNumber != null)
    assert.ok(data['hojin-infos'] != null)

    console.log(`totalCount: ${data.totalCount}, totalPage: ${data.totalPage}, pageNumber: ${data.pageNumber}`)

    await sleep(3000)

    data['hojin-infos'].forEach(validate)

    for (let i = 2; i <= data.totalPage; i++) {
      console.log(`Request start: ${i}/${data.totalPage}`)

      const d = await client.findByTimeRangeRaw(i, date, date)

      console.log(`Request end: ${i}/${data.totalPage}`)
      await sleep(3000)

      d['hojin-infos'].forEach(validate)
    }

    date.setDate(date.getDate() + interval)
  };
}

main()
