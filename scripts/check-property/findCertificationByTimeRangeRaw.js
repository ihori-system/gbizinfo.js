const assert = require('assert')
const { GbizinfoClient } = require('../..')
const {
  CERTIFICATION_PROPERTIES,
  CORPORATION_PROPERTIES
} = require('./constants')
const { sleep } = require('./utils')

require('dotenv').config()

const client = new GbizinfoClient({ token: process.env.X_HOJININFO_API_TOKEN })

const date = new Date('2021-03-01')

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
  assert.ok(d.certification != null)
  d.certification.forEach((d) => {
    if (d.government_departments == null || d.title == null) {
      console.log(d)
    }
    assert.ok(d.government_departments != null)
    assert.ok(d.title != null)
    const diff = Object.keys(d).filter((k) => CERTIFICATION_PROPERTIES.includes(k) === false)
    if (diff.length > 0) {
      console.log(d)
      console.log(diff)
    }
    assert.strictEqual(diff.length, 0)
  })
}

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const data = await client.findCertificationByTimeRangeRaw(1, date, date)

    assert.ok(data.totalCount != null)
    assert.ok(data.totalPage != null)
    assert.ok(data.pageNumber != null)
    assert.ok(data['hojin-infos'] != null)

    console.log(`totalCount: ${data.totalCount}, totalPage: ${data.totalPage}, pageNumber: ${data.pageNumber}`)

    await sleep(3000)

    data['hojin-infos'].forEach(validate)

    for (let i = 2; i <= data.totalPage; i++) {
      console.log(`Request start: ${i}/${data.totalPage}`)

      const d = await client.findCertificationByTimeRangeRaw(i, date, date)

      console.log(`Request end: ${i}/${data.totalPage}`)
      await sleep(3000)

      d['hojin-infos'].forEach(validate)
    }

    date.setDate(date.getDate() + interval)
  };
}

main()
