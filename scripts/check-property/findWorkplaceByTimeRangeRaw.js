const assert = require('assert')
const { GbizinfoClient } = require('../..')
const {
  CORPORATION_PROPERTIES,
  WORKPLACE_PROPERTIES,
  WORKPLACE_BASE_INFORMATION_PROPERTIES,
  WORKPLACE_COMPATIBILITY_OF_CHILDREN_AND_WORK_PROPERTIES,
  WORKPLACE_WOMEN_ACTIVITY_INFORMATION_PROPERTIES
} = require('./constants')
const { sleep } = require('./utils')

require('dotenv').config()

const client = new GbizinfoClient({ token: process.env.X_HOJININFO_API_TOKEN })

const date = new Date('2021-07-21')

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findWorkplaceByTimeRangeRaw(1, date, date)

    await sleep(3000)

    if (actual['hojin-infos'] == null) {
      console.log('skip:', date)
      date.setDate(date.getDate() + interval)
      continue
    }

    console.log('found:', date)

    assert.ok(actual.totalCount != null)
    assert.ok(actual.totalPage != null)
    assert.ok(actual.pageNumber != null)
    actual['hojin-infos'].forEach((d) => {
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
      assert.ok(d.workplace_info != null)
      const w = d.workplace_info
      {
        const diff = Object.keys(w).filter((k) => WORKPLACE_PROPERTIES.includes(k) === false)
        if (diff.length > 0) {
          console.log(w)
          console.log(diff)
        }
        assert.strictEqual(diff.length, 0)

        if (w.base_infos != null) {
          const wb = w.base_infos
          const diff = Object.keys(wb).filter((k) => WORKPLACE_BASE_INFORMATION_PROPERTIES.includes(k) === false)
          if (diff.length > 0) {
            console.log(wb)
            console.log(diff)
          }
          assert.strictEqual(diff.length, 0)
        }

        if (w.compatibility_of_childcare_and_work != null) {
          const c = w.compatibility_of_childcare_and_work
          const diff = Object.keys(c).filter((k) => WORKPLACE_COMPATIBILITY_OF_CHILDREN_AND_WORK_PROPERTIES.includes(k) === false)
          if (diff.length > 0) {
            console.log(c)
            console.log(diff)
          }
          assert.strictEqual(diff.length, 0)
        }

        if (w.women_activity_infos != null) {
          const ww = w.women_activity_infos
          const diff = Object.keys(ww).filter((k) => WORKPLACE_WOMEN_ACTIVITY_INFORMATION_PROPERTIES.includes(k) === false)
          if (diff.length > 0) {
            console.log(ww)
            console.log(diff)
          }
          assert.strictEqual(diff.length, 0)
        }
      }
    })

    date.setDate(date.getDate() + interval)
  };
}

main()
