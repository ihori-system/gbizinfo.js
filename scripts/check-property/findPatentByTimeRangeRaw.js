const assert = require('assert');
const {GbizinfoClient} = require('../..');
const {
  CORPORATION_PROPERTIES,
  PATENT_PROPERTIES,
  PATENT_CLASSIFICATION_PROPERTIES,
} = require('./constants');
const {sleep} = require('./utils');

require('dotenv').config();

const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});

const date = new Date('2021-08-27');

const main = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findPatentByTimeRangeRaw(1, date, date);

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
      assert.ok(d['patent'] != null);
      d['patent'].forEach((d) => {
        if (d['application_date'] == null || d['application_number'] == null || d['classifications'] == null || d['patent_type'] == null || d['title'] == null) {
          console.log(d);
        }
        assert.ok(d['application_date'] != null);
        assert.ok(d['application_number'] != null);
        assert.ok(d['classifications'] != null);
        assert.ok(d['patent_type'] != null);
        assert.ok(d['title'] != null);
        const diff = Object.keys(d).filter((k) => PATENT_PROPERTIES.includes(k) === false);
        if (diff.length > 0) {
          console.log(d);
          console.log(diff);
        }
        assert.strictEqual(diff.length, 0);

        d['classifications'].forEach((d) => {
          if (d['コード名'] == null || d['コード値'] == null) {
            console.log(d);
          }
          assert.ok(d['コード名'] != null);
          assert.ok(d['コード値'] != null);
          const diff = Object.keys(d).filter((k) => PATENT_CLASSIFICATION_PROPERTIES.includes(k) === false);
          if (diff.length > 0) {
            console.log(d);
            console.log(diff);
          }
          assert.strictEqual(diff.length, 0);
        });
      });
    });

    date.setDate(date.getDate() + interval);
  };
};

main();
