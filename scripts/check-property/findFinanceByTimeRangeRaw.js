const assert = require('assert');
const {GbizinfoClient} = require('../..');
const {
  FINANCE_PROPERTIES,
  HOJIN_INFO_PROPERTIES,
  MAJOR_SHAREHOLDER_PROPERTIES,
  MANAGEMENT_INDEX_PROPERTIES,
} = require('./constants');
const {sleep} = require('./utils');

require('dotenv').config();

const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});

const date = new Date('2019-03-20');

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findFinanceByTimeRangeRaw(1, date, date);

    await sleep(3000);

    if (actual['hojin-infos'] == null) {
      console.log('skip:', date);
      date.setDate(date.getDate() + interval);
      continue;
    }

    console.log('found:', date);

    assert.ok(actual['totalCount'] != null);
    assert.ok(actual['totalPage'] != null);
    assert.ok(actual['pageNumber'] != null);
    actual['hojin-infos'].forEach((d) => {
      if (d['corporate_number'] == null || d['name'] == null || d['status'] == null || d['update_date'] == null) {
        console.log(d);
      }
      assert.ok(d['corporate_number'] != null);
      assert.ok(d['name'] != null);
      assert.ok(d['status'] != null);
      assert.ok(d['update_date'] != null);
      const diff = Object.keys(d).filter((k) => HOJIN_INFO_PROPERTIES.includes(k) === false);
      if (diff.length > 0) {
        console.log(d);
        console.log(diff);
      }
      assert.strictEqual(diff.length, 0);
      assert.ok(d['finance'] != null);
      const f = d['finance'];
      {
        if (f['accounting_standards'] == null || f['fiscal_year_cover_page'] == null || f['major_shareholders'] == null || f['management_index'] == null) {
          console.log(f);
        }
        assert.ok(f['accounting_standards'] != null);
        assert.ok(f['fiscal_year_cover_page'] != null);
        assert.ok(f['major_shareholders'] != null);
        assert.ok(f['management_index'] != null);
        const diff = Object.keys(f).filter((k) => FINANCE_PROPERTIES.includes(k) === false);
        if (diff.length > 0) {
          console.log(f);
          console.log(diff);
        }
        assert.strictEqual(diff.length, 0);

        f['major_shareholders'].forEach((m) => {
          if (m['name_major_shareholders'] == null || m['shareholding_ratio'] == null) {
            console.log(m);
          }
          assert.ok(m['name_major_shareholders'] != null);
          assert.ok(m['shareholding_ratio'] != null);
          const diff = Object.keys(m).filter((k) => MAJOR_SHAREHOLDER_PROPERTIES.includes(k) === false);
          if (diff.length > 0) {
            console.log(m);
            console.log(diff);
          }
          assert.strictEqual(diff.length, 0);
        });

        f['management_index'].forEach((m) => {
          if (
            m['capital_stock_summary_of_business_results'] == null ||
            m['capital_stock_summary_of_business_results_unit_ref'] == null ||
            m['net_assets_summary_of_business_results'] == null ||
            m['net_assets_summary_of_business_results_unit_ref'] == null ||
            m['net_income_loss_summary_of_business_results'] == null ||
            m['net_income_loss_summary_of_business_results_unit_ref'] == null ||
            m['ordinary_income_loss_summary_of_business_results'] == null ||
            m['ordinary_income_loss_summary_of_business_results_unit_ref'] == null ||
            m['period'] == null ||
            m['total_assets_summary_of_business_results'] == null ||
            m['total_assets_summary_of_business_results_unit_ref'] == null
          ) {
            console.log(m);
          }
          assert.ok(m['capital_stock_summary_of_business_results'] != null);
          assert.ok(m['capital_stock_summary_of_business_results_unit_ref'] != null);
          assert.ok(m['net_assets_summary_of_business_results'] != null);
          assert.ok(m['net_assets_summary_of_business_results_unit_ref'] != null);
          assert.ok(m['net_income_loss_summary_of_business_results'] != null);
          assert.ok(m['net_income_loss_summary_of_business_results_unit_ref'] != null);
          assert.ok(m['ordinary_income_loss_summary_of_business_results'] != null);
          assert.ok(m['ordinary_income_loss_summary_of_business_results_unit_ref'] != null);
          assert.ok(m['period'] != null);
          assert.ok(m['total_assets_summary_of_business_results'] != null);
          assert.ok(m['total_assets_summary_of_business_results_unit_ref'] != null);
          const diff = Object.keys(m).filter((k) => MANAGEMENT_INDEX_PROPERTIES.includes(k) === false);
          if (diff.length > 0) {
            console.log(m);
            console.log(diff);
          }
          assert.strictEqual(diff.length, 0);
        });
      }
    });

    date.setDate(date.getDate() + interval);
  };
};

main();
