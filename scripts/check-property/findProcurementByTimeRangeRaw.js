const assert = require('assert');
const {GbizinfoClient} = require('../..');
const {
  CORPORATION_PROPERTIES,
  PROCUREMENT_PROPERTIES,
} = require('./constants');
const {sleep} = require('./utils');

require('dotenv').config();

const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});

const date = new Date('2020-09-29');

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findProcurementByTimeRangeRaw(1, date, date);

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
      const diff = Object.keys(d).filter((k) => CORPORATION_PROPERTIES.includes(k) === false);
      if (diff.length > 0) {
        console.log(d);
        console.log(diff);
      }
      assert.strictEqual(diff.length, 0);
      assert.ok(d['procurement'] != null);
      d['procurement'].forEach((d) => {
        if (d['amount'] == null || d['government_departments'] == null || d['title'] == null) {
          console.log(d);
        }
        assert.ok(d['amount'] != null);
        assert.ok(d['government_departments'] != null);
        assert.ok(d['title'] != null);
        const diff = Object.keys(d).filter((k) => PROCUREMENT_PROPERTIES.includes(k) === false);
        if (diff.length > 0) {
          console.log(d);
          console.log(diff);
        }
        assert.strictEqual(diff.length, 0);
      });
    });

    date.setDate(date.getDate() + interval);
  };
};

main();