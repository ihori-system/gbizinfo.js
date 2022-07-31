const assert = require('assert')
const { GbizinfoClient } = require('../..')
const {
  FINANCE_PROPERTIES,
  CORPORATION_PROPERTIES,
  MAJOR_SHAREHOLDER_PROPERTIES,
  MANAGEMENT_INDEX_PROPERTIES
} = require('./constants')
const { sleep } = require('./utils')

require('dotenv').config()

const client = new GbizinfoClient({ token: process.env.X_HOJININFO_API_TOKEN })

const date = new Date('2019-03-20')

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
  assert.ok(d.finance != null)
  const f = d.finance
  {
    if (f.accounting_standards == null || f.fiscal_year_cover_page == null || f.major_shareholders == null || f.management_index == null) {
      console.log(f)
    }
    assert.ok(f.accounting_standards != null)
    assert.ok(f.fiscal_year_cover_page != null)
    assert.ok(f.major_shareholders != null)
    assert.ok(f.management_index != null)
    const diff = Object.keys(f).filter((k) => FINANCE_PROPERTIES.includes(k) === false)
    if (diff.length > 0) {
      console.log(f)
      console.log(diff)
    }
    assert.strictEqual(diff.length, 0)

    f.major_shareholders.forEach((m) => {
      if (m.name_major_shareholders == null || m.shareholding_ratio == null) {
        console.log(m)
      }
      assert.ok(m.name_major_shareholders != null)
      assert.ok(m.shareholding_ratio != null)
      const diff = Object.keys(m).filter((k) => MAJOR_SHAREHOLDER_PROPERTIES.includes(k) === false)
      if (diff.length > 0) {
        console.log(m)
        console.log(diff)
      }
      assert.strictEqual(diff.length, 0)
    })

    f.management_index.forEach((m) => {
      if (
        m.capital_stock_summary_of_business_results == null ||
        m.capital_stock_summary_of_business_results_unit_ref == null ||
        m.net_assets_summary_of_business_results == null ||
        m.net_assets_summary_of_business_results_unit_ref == null ||
        m.net_income_loss_summary_of_business_results == null ||
        m.net_income_loss_summary_of_business_results_unit_ref == null ||
        m.ordinary_income_loss_summary_of_business_results == null ||
        m.ordinary_income_loss_summary_of_business_results_unit_ref == null ||
        m.period == null ||
        m.total_assets_summary_of_business_results == null ||
        m.total_assets_summary_of_business_results_unit_ref == null
      ) {
        console.log(m)
      }
      assert.ok(m.capital_stock_summary_of_business_results != null)
      assert.ok(m.capital_stock_summary_of_business_results_unit_ref != null)
      assert.ok(m.net_assets_summary_of_business_results != null)
      assert.ok(m.net_assets_summary_of_business_results_unit_ref != null)
      assert.ok(m.net_income_loss_summary_of_business_results != null)
      assert.ok(m.net_income_loss_summary_of_business_results_unit_ref != null)
      assert.ok(m.ordinary_income_loss_summary_of_business_results != null)
      assert.ok(m.ordinary_income_loss_summary_of_business_results_unit_ref != null)
      assert.ok(m.period != null)
      assert.ok(m.total_assets_summary_of_business_results != null)
      assert.ok(m.total_assets_summary_of_business_results_unit_ref != null)
      const diff = Object.keys(m).filter((k) => MANAGEMENT_INDEX_PROPERTIES.includes(k) === false)
      if (diff.length > 0) {
        console.log(m)
        console.log(diff)
      }
      assert.strictEqual(diff.length, 0)
    })
  }
}

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const data = await client.findFinanceByTimeRangeRaw(1, date, date)

    assert.ok(data.totalCount != null)
    assert.ok(data.totalPage != null)
    assert.ok(data.pageNumber != null)
    assert.ok(data['hojin-infos'] != null)

    console.log(`totalCount: ${data.totalCount}, totalPage: ${data.totalPage}, pageNumber: ${data.pageNumber}`)

    await sleep(3000)

    data['hojin-infos'].forEach(validate)

    for (let i = 2; i <= data.totalPage; i++) {
      console.log(`Request start: ${i}/${data.totalPage}`)

      const d = await client.findFinanceByTimeRangeRaw(i, date, date)

      console.log(`Request end: ${i}/${data.totalPage}`)
      await sleep(3000)

      d['hojin-infos'].forEach(validate)
    }

    date.setDate(date.getDate() + interval)
  };
}

main()
